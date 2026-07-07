import { desc, eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/d1'
import { Hono } from 'hono'

import { items } from './schema.js'

const app = new Hono()

async function ensureSchema(db) {
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        notes TEXT NOT NULL DEFAULT '',
        done INTEGER NOT NULL DEFAULT 0,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )`,
    )
    .run()
}

function cleanItem(item) {
  return {
    ...item,
    done: Boolean(item.done),
  }
}

async function findItem(db, id) {
  const rows = await db.select().from(items).where(eq(items.id, id)).limit(1)
  return rows[0] ? cleanItem(rows[0]) : null
}

app.get('/api/health', async (c) => {
  await ensureSchema(c.env.DB)
  return c.json({ status: 'ok', storage: 'Cloudflare D1' })
})

app.get('/api/items', async (c) => {
  await ensureSchema(c.env.DB)
  const db = drizzle(c.env.DB)
  const rows = await db.select().from(items).orderBy(desc(items.createdAt))
  return c.json({ items: rows.map(cleanItem) })
})

app.post('/api/items', async (c) => {
  await ensureSchema(c.env.DB)
  const body = await c.req.json().catch(() => ({}))
  const title = String(body.title ?? '').trim()
  const notes = String(body.notes ?? '').trim()

  if (!title) {
    return c.json({ error: 'Title is required.' }, 400)
  }

  const now = Date.now()
  const db = drizzle(c.env.DB)
  const created = await db
    .insert(items)
    .values({ title, notes, done: 0, createdAt: now, updatedAt: now })
    .returning()

  return c.json({ item: cleanItem(created[0]) }, 201)
})

app.patch('/api/items/:id', async (c) => {
  await ensureSchema(c.env.DB)
  const id = Number(c.req.param('id'))

  if (!Number.isInteger(id) || id < 1) {
    return c.json({ error: 'Invalid item id.' }, 400)
  }

  const body = await c.req.json().catch(() => ({}))
  const changes = { updatedAt: Date.now() }

  if (body.title !== undefined) {
    const title = String(body.title).trim()
    if (!title) {
      return c.json({ error: 'Title is required.' }, 400)
    }
    changes.title = title
  }

  if (body.notes !== undefined) {
    changes.notes = String(body.notes).trim()
  }

  if (body.done !== undefined) {
    changes.done = body.done ? 1 : 0
  }

  const db = drizzle(c.env.DB)
  await db.update(items).set(changes).where(eq(items.id, id))
  const item = await findItem(db, id)

  if (!item) {
    return c.json({ error: 'Item not found.' }, 404)
  }

  return c.json({ item })
})

app.delete('/api/items/:id', async (c) => {
  await ensureSchema(c.env.DB)
  const id = Number(c.req.param('id'))

  if (!Number.isInteger(id) || id < 1) {
    return c.json({ error: 'Invalid item id.' }, 400)
  }

  const db = drizzle(c.env.DB)
  const item = await findItem(db, id)

  if (!item) {
    return c.json({ error: 'Item not found.' }, 404)
  }

  await db.delete(items).where(eq(items.id, id))
  return c.json({ item })
})

export default app
