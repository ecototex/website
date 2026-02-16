@echo off
echo Cleaning up...
rd /s /q .git

echo Initializing...
git init
git config http.postBuffer 524288000
git remote add origin https://github.com/ecototex/website.git

echo Adding Codebase...
git add .
git reset client/public/assets
git commit -m "Initial commit - Codebase"
git push -u origin main

echo Adding Assets...
git add client/public/assets
git commit -m "Add assets"
git push origin main
