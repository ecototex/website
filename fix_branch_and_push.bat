@echo off
git branch -m master main
git add .
git commit -m "Add all files including assets"
git push -u origin main --force
