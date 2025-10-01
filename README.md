# Dark Heresy 2E VTT

This is a prototype VTT (Virtual Tabletop) tailored for Dark Heresy 2nd Edition.

## Structure
- `frontend/` → React app (deploy on Vercel)
- `server/` → Express + WebSocket backend with SQLite (deploy on Render)

## Running locally
```bash
# backend
cd server
npm install
npm run dev

# frontend (new terminal)
cd frontend
npm install
npm run dev
```
Open http://localhost:5173 (frontend) and it will connect to http://localhost:4000 (backend).
