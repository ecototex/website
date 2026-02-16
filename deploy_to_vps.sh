#!/bin/bash

# Configuration
REPO_URL="https://github.com/ecototex/website.git"
DEST_DIR="/var/www/ecototex"
PORT=8085
CONF_FILE="/etc/apache2/sites-available/ecototex-$PORT.conf"

echo "==========================================="
echo " Deploying Ecototex to Port $PORT (v2)"
echo "==========================================="

# 1. Update system and install dependencies robustly
echo "[1/7] Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Installing via nodesource..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js is already installed: $(node -v)"
fi

# Ensure Apache is installed
if ! command -v apache2 &> /dev/null; then
    echo "Installing Apache..."
    sudo apt-get install -y apache2
fi

# Fix potential broken installations
sudo apt-get install -f -y

# 2. Check for existing site on port 8085
echo "[2/7] Checking port $PORT usage..."
if sudo lsof -i:$PORT; then
    echo "WARNING: Port $PORT is in use. Disabling old sites..."
    OLD_SITES=$(grep -l "<VirtualHost .*:$PORT>" /etc/apache2/sites-enabled/*.conf)
    for site in $OLD_SITES; do
        site_name=$(basename "$site")
        sudo a2dissite "$site_name"
    done
fi

# 3. Clone/Pull Repository
echo "[3/7] Fetching code..."
if [ -d "$DEST_DIR" ]; then
    echo "Updating existing repository..."
    cd "$DEST_DIR"
    sudo git fetch origin
    sudo git reset --hard origin/main
else
    echo "Cloning repository..."
    sudo git clone "$REPO_URL" "$DEST_DIR"
fi

# 4. Build Static Site
echo "[4/7] Building frontend..."
cd "$DEST_DIR/client"

# Fix permissions for build
# Use current user or fallback to root if not sudo
if [ -n "$SUDO_USER" ]; then
    sudo chown -R $SUDO_USER:$SUDO_USER .
else
    # If running directly as root
    sudo chown -R root:root .
fi

# Clean install to avoid conflicts
rm -rf node_modules package-lock.json
npm install
# Set specific production flag to avoid dev dependencies that might fail
NODE_ENV=production npm run build

# Verify build success
if [ ! -d "dist" ]; then
    echo "ERROR: Build failed! 'dist' directory not created."
    exit 1
fi

# 5. Configure Apache
echo "[5/7] Configuring Apache..."

# Ensure Apache listens on port 8085
if ! grep -q "Listen $PORT" /etc/apache2/ports.conf; then
    echo "Listen $PORT" | sudo tee -a /etc/apache2/ports.conf
fi

# Create VirtualHost Configuration
sudo bash -c "cat > $CONF_FILE" <<EOF
<VirtualHost *:$PORT>
    ServerAdmin webmaster@localhost
    DocumentRoot $DEST_DIR/client/dist

    <Directory $DEST_DIR/client/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        FallbackResource /index.html
    </Directory>

    ErrorLog \${APACHE_LOG_DIR}/error_ecototex.log
    CustomLog \${APACHE_LOG_DIR}/access_ecototex.log combined
</VirtualHost>
EOF

sudo a2ensite "ecototex-$PORT.conf"

# 6. Ensure Apache is Running
echo "[6/7] Starting Apache..."
sudo systemctl enable apache2
if ! sudo systemctl is-active --quiet apache2; then
    echo "Apache is not running. Starting it now..."
    sudo systemctl start apache2
fi

# 7. Reload Apache
echo "[7/7] Reloading Configuration..."
if sudo apache2ctl configtest; then
    sudo systemctl reload apache2
    echo "==========================================="
    echo " SUCCESS! Website is live on Port $PORT"
    echo " Test URL: http://$(curl -s ifconfig.me):$PORT"
    echo "==========================================="
else
    echo "ERROR: Apache configuration test failed. Check logs."
    sudo journalctl -xeu apache2.service --no-pager | tail -n 20
    exit 1
fi
