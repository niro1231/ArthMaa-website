# ArthMaa Crafts & Decor

- `backend/`  – NestJS API (port 4000, no database; catalog lives in `backend/src/catalog/catalog.data.ts`)
- `frontend/` – Next.js website (port 3000)

## Run (development)
```
cd backend  && npm run start:dev
cd frontend && npm run dev
```
Open http://localhost:3000

## Editing products / adding photos
Edit `backend/src/catalog/catalog.data.ts`. To show a real photo, put the file in
`frontend/public/products/` and add `image: "/products/lamp.jpg"` to the product.
