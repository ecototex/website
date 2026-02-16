#!/bin/bash
# server_setup.sh
# Run this on the VPS to setup the bare git repo and hook

REPO_PATH="/var/repo/ecototex.git"
WEB_PATH="/var/www/ecototex"

echo "1. Creating Bare Repository at $REPO_PATH..."
mkdir -p $REPO_PATH
cd $REPO_PATH
git init --bare

echo "2. Creating post-receive hook..."
cat > hooks/post-receive << 'EOF'
#!/bin/bash
TARGET="/var/www/ecototex"
GIT_DIR="/var/repo/ecototex.git"
BRANCH="main"

while read oldrev newrev ref
do
    if [[ $ref = refs/heads/$BRANCH ]]; then
        echo "==========================================="
        echo "   🚀 Received Push to $BRANCH. Deploying..."
        echo "==========================================="
        
        # Deploy files
        mkdir -p $TARGET
        git --work-tree=$TARGET --git-dir=$GIT_DIR checkout -f $BRANCH
        
        # Build logic
        cd $TARGET/client
        echo "📦 Installing Dependencies..."
        npm install
        echo "🏗️ Building Project..."
        npm run build
        
        # Permissions
        chown -R www-data:www-data $TARGET/client/dist
        
        # Reload Server
        systemctl reload apache2
        
        echo "==========================================="
        echo "   ✅ Deployment Complete!"
        echo "==========================================="
    fi
done
EOF

echo "3. Making hook executable..."
chmod +x hooks/post-receive

echo "✅ Server Setup Complete!"
