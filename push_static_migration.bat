@echo off
git add client/src/data/bags.ts
git add client/src/App.tsx
git add client/src/pages/ProductDetail.tsx
git commit -m "Migrate to static data for Cloudflare Pages deployment"
git push origin main
