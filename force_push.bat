@echo off
git init
git config http.postBuffer 524288000
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ecototex/website.git
git push -u origin main
