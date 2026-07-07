# Sandbox Template

This is the starter app copied into new Modal sandboxes.

The starter stack is:

- Vite + React for the frontend
- Hono running as a Cloudflare Worker for `/api/*`
- Cloudflare D1 for SQLite-compatible storage
- Drizzle ORM for database queries

Run it locally with:

```bash
npm install
npm run dev
```

The local dev server runs on port `3000`, which keeps it aligned with the Modal preview flow.

It includes:

- a Vite React frontend on port `3000`
- a Hono API running through the Cloudflare Worker dev runtime
- D1-compatible storage through Wrangler

The backend app does not copy these files at runtime. Instead, use the Modal
snapshot script to publish this folder as a reusable image, then set
`MODAL_TEMPLATE_IMAGE_ID` in `backend/.env`.

```bash
cd backend
python scripts/create_modal_template_snapshot.py
```

After the script prints an image id, update:

```bash
MODAL_TEMPLATE_IMAGE_ID=im-your-new-image-id
```

Local template checks:

```bash
npm install
npm run build
```
