import { Pool } from 'pg';

let pool: Pool | undefined;

export function getPool() {
  if (!pool) {
    const conn = process.env.DATABASE_URL!;
    pool = new Pool({ connectionString: conn, max: 10 });
  }
  return pool;
}

export async function ensureTables() {
  const p = getPool();
  await p.query(`
    CREATE TABLE IF NOT EXISTS contact_inquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(120),
      email VARCHAR(220),
      company VARCHAR(160),
      role VARCHAR(160),
      phone VARCHAR(80),
      referral VARCHAR(120),
      project_types VARCHAR(400),
      budget VARCHAR(80),
      details TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}
