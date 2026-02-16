@echo off
git add .github/workflows/deploy.yml
git add client/public/CNAME
git commit -m "Add GitHub Pages deployment workflow and CNAME"
git push origin main
