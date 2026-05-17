# Phimart Frontend

React + Vite frontend for the Phimart app.

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or a compatible package manager)

## Step-by-step setup and installation

1) Clone the repository

```bash
git clone <https://github.com/shoyebreza/phimart-frontend>
```

2) Move into the project folder

```bash
cd phimart-frontend
```

3) Install dependencies

```bash
npm install
```

4) Configure environment (if required)

- Create a .env file if your API or auth settings require it.
- Example keys (adjust to your backend):

```bash
VITE_API_BASE_URL=http://localhost:8000
```

- API base URL is currently set to `http://127.0.0.1:8000/api` in [src/services/api-client.js](src/services/api-client.js). Update it if your backend runs elsewhere.

5) Start the development server

```bash
npm run dev
```

6) Open the app

- Vite will print the local URL (usually http://localhost:5173).

## Useful scripts

- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint (if configured): `npm run lint`
