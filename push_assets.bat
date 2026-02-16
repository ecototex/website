@echo off
git rm -r --cached node_modules
git add .
git commit -m "Update gitignore and push assets"
git push origin main
