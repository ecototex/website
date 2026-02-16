@echo off
echo ===================================================
echo  Setting up Git Push to Deploy (VPS)
echo ===================================================

echo [1/3] Copying setup script to server...
echo (Please enter your VPS password if prompted)
scp server_setup.sh root@128.140.12.117:/root/server_setup.sh

echo.
echo [2/3] Executing setup on server...
echo (Please enter your VPS password again)
ssh root@128.140.12.117 "chmod +x /root/server_setup.sh && /root/server_setup.sh"

echo.
echo [3/3] Configuring local Git...
echo Adding push URL to 'origin' so it pushes to both GitHub and VPS...

:: Remove existing deploy remote if it exists to be safe
git remote remove deploy 2>NUL

:: Add the VPS as a secondary push URL for origin
:: First, ensure origin exists. If not, add normal one. 
:: We assume origin exists.
:: We want 'git push origin' to push to BOTH.
:: To do this, we need to set the push URL for origin to include BOTH.
:: By default, 'git push' pushes to the push URL. If multiple are defined, it pushes to all.

:: 1. Add GitHub as a push URL (so it remains)
:: Check current URL
for /f "tokens=*" %%i in ('git remote get-url origin') do set GITHUB_URL=%%i
git remote set-url --push --add origin %GITHUB_URL%

:: 2. Add VPS as a push URL
git remote set-url --push --add origin root@128.140.12.117:/var/repo/ecototex.git

echo.
echo ✅ Done! 
echo Now run: "git push origin main"
echo It will ask for your VPS password and deploy automatically.
pause
