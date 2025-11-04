import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getPool, ensureTables } from '@/lib/db';

export const runtime = 'nodejs';

const ContactSchema = z.object({
  name: z.string().trim().optional().nullable(),
  email: z.string().email().optional().nullable(),
  company: z.string().trim().optional().nullable(),
  role: z.string().trim().optional().nullable(),
  phone: z.string().trim().optional().nullable(),
  referral: z.string().trim().optional().nullable(),
  project_types: z.array(z.string()).default([]),
  budget: z.string().trim().optional().nullable(),
  details: z.string().trim().optional().nullable(),
});

export async function POST(req: Request) {
  try {
    // make sure table exists (no-op if already created)
    await ensureTables();

    const body = await req.json();
    const data = ContactSchema.parse(body);

    // at least one contact field
    if (!data.email && !data.phone && !data.name) {
      return NextResponse.json(
        { detail: 'Please provide name, email or phone.' },
        { status: 422 }
      );
    }

    const pool = getPool();
    const result = await pool.query(
      `
      INSERT INTO contact_inquiries
        (name, email, company, role, phone, referral, project_types, budget, details, created_at)
      VALUES
        ($1,   $2,    $3,      $4,   $5,   $6,       $7,            $8,    $9,     NOW())
      RETURNING id, created_at;
      `,
      [
        data.name ?? null,
        data.email?.toLowerCase() ?? null,
        data.company ?? null,
        data.role ?? null,
        data.phone ?? null,
        data.referral ?? null,
        data.project_types.length ? data.project_types.join(', ') : null,
        data.budget ?? null,
        data.details ?? null,
      ]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    console.error('POST /api/contacts error', err);
    return NextResponse.json(
      { detail: err?.message ?? 'Internal Server Error' },
      { status: 500 }
    );
  }
}
