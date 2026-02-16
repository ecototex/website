@echo off
git add client/src/types.ts
git add client/src/pages/ProductDetail.tsx
git add client/src/App.tsx
git commit -m "Fix syntax and type errors in static migration"
git push origin main
