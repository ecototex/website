@echo off
echo Cleaning up...
rd /s /q .git

echo Initializing...
git init
git config http.postBuffer 524288000
git remote add origin https://github.com/ecototex/website.git

echo Preparing Codebase commit...
git add .
git reset client/public/assets
git commit -m "Initial commit - Codebase"

echo Ready for manual push.
