// 'use client';

// import { useState } from 'react';

// const EMAIL_TO = 'fahad.anwaar@cloudqor.co';
// const PROJECT_TYPES = [
//   'Website',
//   'App',
//   'AI Agents',
//   'Data / Analytics',
//   'Cloud Infra',
//   'DevOps / CI-CD',
//   'Integrations',
//   'Consulting',
// ] as const;

// const BUDGETS = ['$2,000 – $5,000', '$5,000 – $10,000', 'More than $10,000'] as const;

// export default function ContactPage() {
//   const [types, setTypes] = useState<string[]>([]);
//   const [budget, setBudget] = useState<string | null>(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [ok, setOk] = useState<null | boolean>(null);

//   const toggleType = (label: string) => {
//     setTypes((prev) =>
//       prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
//     );
//   };

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setSubmitting(true);
//     setOk(null);

//     const fd = new FormData(e.currentTarget);

//     // Honeypot: if filled, drop
//     if ((fd.get('companyWebsite') as string)?.trim()) {
//       setOk(true);
//       setSubmitting(false);
//       (e.target as HTMLFormElement).reset();
//       setTypes([]);
//       setBudget(null);
//       return;
//     }

//     const name = (fd.get('name') as string)?.trim() || '';
//     const email = (fd.get('email') as string)?.trim() || '';
//     const company = (fd.get('company') as string)?.trim() || '';
//     const role = (fd.get('role') as string)?.trim() || '';
//     const phone = (fd.get('phone') as string)?.trim() || '';
//     const referral = (fd.get('referral') as string) || '';
//     const details = (fd.get('details') as string)?.trim() || '';

//     // Build the email content
//     const subject = `New inquiry — ${name || 'Anonymous'} (${email || 'no email'})`;

//     const bodyLines = [
//       `Name: ${name}`,
//       `Email: ${email}`,
//       `Company: ${company}`,
//       `Role: ${role}`,
//       `Phone: ${phone}`,
//       `Heard about us via: ${referral || '—'}`,
//       `Project types: ${types.length ? types.join(', ') : '—'}`,
//       `Budget: ${budget ?? '—'}`,
//       '',
//       'Details:',
//       details || '—',
//     ];

//     const body = encodeURIComponent(bodyLines.join('\n'));
//     const subjectEncoded = encodeURIComponent(subject);
//     const mailtoUrl = `mailto:${EMAIL_TO}?subject=${subjectEncoded}&body=${body}`;

//     try {
//       // Try to open the user's mail client
//       window.location.href = mailtoUrl;

//       // Small delay to allow redirect, then show optimistic success
//       await new Promise((r) => setTimeout(r, 500));
//       setOk(true);

//       (e.target as HTMLFormElement).reset();
//       setTypes([]);
//       setBudget(null);
//     } catch {
//       setOk(false);
//       // Fallback: copy message to clipboard so they can paste anywhere
//       try {
//         await navigator.clipboard.writeText(decodeURIComponent(body));
//       } catch (_) {
//         // ignore
//       }
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <main className="max-w-5xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-20">
//       {/* Header */}
//       <header className="mb-8 md:mb-12">
//         <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
//           <span className="mr-3">Let’s Talk</span>
//           <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Code
//           </span>
//         </h1>

//         <div className="mt-6 h-px w-full bg-slate-200 dark:bg-slate-800" />

//         <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">
//           Got a project in mind, a quick question, or just need a second opinion?
//           We’re all ears.
//         </p>
//       </header>

//       {/* Project type chips */}
//       <section className="mb-10 md:mb-14">
//         <div className="flex flex-wrap gap-3 md:gap-4">
//           {PROJECT_TYPES.map((label) => {
//             const active = types.includes(label);
//             return (
//               <button
//                 key={label}
//                 type="button"
//                 onClick={() => toggleType(label)}
//                 className={[
//                   'rounded-full px-5 py-3 text-base font-medium transition',
//                   'border',
//                   active
//                     ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
//                     : 'bg-white/60 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100 border-slate-300/80 hover:border-slate-400 dark:border-slate-700',
//                 ].join(' ')}
//               >
//                 {label}
//               </button>
//             );
//           })}
//         </div>
//       </section>

//       {/* Form Card */}
//       <section className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 shadow-[0_12px_40px_-20px_rgba(2,6,23,.15)] p-6 md:p-10">
//         <form onSubmit={onSubmit} className="space-y-10" noValidate>
//           {/* Name / Email */}
//           <div className="grid md:grid-cols-2 gap-8 md:gap-10">
//             <Field label="Name" name="name" required />
//             <Field label="Email" name="email" type="email" required />
//           </div>

//           {/* Company / Role */}
//           <div className="grid md:grid-cols-2 gap-8 md:gap-10">
//             <Field label="Company name" name="company" />
//             <Field label="Your designation" name="role" />
//           </div>

//           {/* Phone / Referral */}
//           <div className="grid md:grid-cols-2 gap-8 md:gap-10">
//             <Field label="Phone number" name="phone" />
//             {/* <div className="space-y-2">
//               <label className="block text-lg text-slate-500">How did you hear about us</label>
//             </div> */}
//           </div>

//           {/* Budget Pills */}
//           <div>
//             <p className="text-xl font-semibold mb-4">Your budget</p>
//             <div className="flex flex-wrap gap-3 md:gap-4">
//               {BUDGETS.map((b) => {
//                 const active = budget === b;
//                 return (
//                   <button
//                     key={b}
//                     type="button"
//                     onClick={() => setBudget(b)}
//                     className={[
//                       'rounded-full px-5 py-3 text-base font-medium transition border',
//                       active
//                         ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
//                         : 'bg-white/60 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100 border-slate-300/80 hover:border-slate-400 dark:border-slate-700',
//                     ].join(' ')}
//                   >
//                     {b}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Project details */}
//           <div className="space-y-2">
//             <label className="block text-lg text-slate-500">Share details about your project</label>
//             <textarea
//               name="details"
//               rows={6}
//               className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:border-slate-900 dark:focus:border-slate-200 outline-none text-xl resize-y min-h-[120px]"
//               placeholder="What are you trying to build? Any links / references? Timelines? Tech constraints?"
//             />
//           </div>

//           {/* Honeypot (anti-bot) */}
//           <input
//             type="text"
//             name="companyWebsite"
//             tabIndex={-1}
//             autoComplete="off"
//             className="hidden"
//             aria-hidden="true"
//           />

//           {/* Hidden (mirrors for completeness) */}
//           <input type="hidden" name="projectTypes" value={types.join(', ')} />
//           <input type="hidden" name="budget" value={budget ?? ''} />

//           {/* Submit */}
//           <div className="pt-4">
//             <button
//               disabled={submitting}
//               className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-60"
//             >
//               {submitting ? 'Preparing…' : 'Send message'}
//             </button>

//             {ok === true && (
//               <span className="ml-4 text-emerald-600 font-medium">
//                 Thanks — your email composer should be open. If not, the message was copied; paste it manually.
//               </span>
//             )}
//             {ok === false && (
//               <span className="ml-4 text-rose-600 font-medium">
//                 Couldn’t open your email app. We copied your message — paste it into any email to send.
//               </span>
//             )}
//           </div>
//         </form>
//       </section>
//     </main>
//   );
// }

// /** Simple underlined field */
// function Field({
//   label,
//   name,
//   type = 'text',
//   required,
// }: {
//   label: string;
//   name: string;
//   type?: string;
//   required?: boolean;
// }) {
//   return (
//     <div className="space-y-2">
//       <label htmlFor={name} className="block text-lg text-slate-500">
//         {label}
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         required={required}
//         className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:border-slate-900 dark:focus:border-slate-200 outline-none py-3 text-xl"
//       />
//     </div>
//   );
// }
'use client';

import { useState } from 'react';

const PROJECT_TYPES = [
  'Website',
  'App',
  'AI Agents',
  'Data / Analytics',
  'Cloud Infra',
  'DevOps / CI-CD',
  'Integrations',
  'Consulting',
] as const;

const BUDGETS = ['$2,000 – $5,000', '$5,000 – $10,000', 'More than $10,000'] as const;

export default function ContactPage() {
  const [types, setTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const toggleType = (label: string) => {
    setTypes((prev) =>
      prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
    );
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);

    const fd = new FormData(e.currentTarget);

    // honeypot
    if ((fd.get('companyWebsite') as string)?.trim()) {
      setOk(true);
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setTypes([]);
      setBudget(null);
      return;
    }

    // collect fields
    const name = (fd.get('name') as string)?.trim() || null;
    const email = (fd.get('email') as string)?.trim() || null;
    const company = (fd.get('company') as string)?.trim() || null;
    const role = (fd.get('role') as string)?.trim() || null;
    const phone = (fd.get('phone') as string)?.trim() || null;
    const referral = (fd.get('referral') as string)?.trim() || null;
    const details = (fd.get('details') as string)?.trim() || null;

    const payload = {
      name,
      email,
      company,
      role,
      phone,
      referral,
      project_types: types,
      budget,
      details,
    };

    try {
      // 🔁 CHANGED: same-origin API (Next.js route)
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.detail || `Request failed (${res.status})`);
      }

      setOk(true);
      (e.target as HTMLFormElement).reset();
      setTypes([]);
      setBudget(null);
    } catch (err) {
      console.error(err);
      setOk(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-5 md:px-8 lg:px-10 py-14 md:py-20">
      {/* Header */}
      <header className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="mr-3">Let’s Talk</span>
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Code
          </span>
        </h1>

        <div className="mt-6 h-px w-full bg-slate-200 dark:bg-slate-800" />

        <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">
          Got a project in mind, a quick question, or just need a second opinion?
          We’re all ears.
        </p>
      </header>

      {/* Project type chips */}
      <section className="mb-10 md:mb-14">
        <div className="flex flex-wrap gap-3 md:gap-4">
          {PROJECT_TYPES.map((label) => {
            const active = types.includes(label);
            return (
              <button
                key={label}
                type="button"
                onClick={() => toggleType(label)}
                className={[
                  'rounded-full px-5 py-3 text-base font-medium transition',
                  'border',
                  active
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white/60 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100 border-slate-300/80 hover:border-slate-400 dark:border-slate-700',
                ].join(' ')}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Form Card */}
      <section className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 shadow-[0_12px_40px_-20px_rgba(2,6,23,.15)] p-6 md:p-10">
        <form onSubmit={onSubmit} className="space-y-10" noValidate>
          {/* Name / Email */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>

          {/* Company / Role */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <Field label="Company name" name="company" />
            <Field label="Your designation" name="role" />
          </div>

          {/* Phone */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <Field label="Phone number" name="phone" />
            {/* <Field label="How did you hear about us" name="referral" /> */}
          </div>

          {/* Budget Pills */}
          <div>
            <p className="text-xl font-semibold mb-4">Your budget</p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {BUDGETS.map((b) => {
                const active = budget === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={[
                      'rounded-full px-5 py-3 text-base font-medium transition border',
                      active
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white/60 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100 border-slate-300/80 hover:border-slate-400 dark:border-slate-700',
                    ].join(' ')}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project details */}
          <div className="space-y-2">
            <label className="block text-lg text-slate-500">Share details about your project</label>
            <textarea
              name="details"
              rows={6}
              className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:border-slate-900 dark:focus:border-slate-200 outline-none text-xl resize-y min-h-[120px]"
              placeholder="What are you trying to build? Any links / references? Timelines? Tech constraints?"
            />
          </div>

          {/* Honeypot (anti-bot) */}
          <input
            type="text"
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {/* Hidden (mirrors for completeness) */}
          <input type="hidden" name="projectTypes" value={types.join(', ')} />
          <input type="hidden" name="budget" value={budget ?? ''} />

          {/* Submit */}
          <div className="pt-4">
            <button
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-60"
            >
              {submitting ? 'Sending…' : 'Send message'}
            </button>

            {ok === true && (
              <span className="ml-4 text-emerald-600 font-medium">
                Thanks — we’ve received your message.
              </span>
            )}
            {ok === false && (
              <span className="ml-4 text-rose-600 font-medium">
                Something went wrong — please try again.
              </span>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

/** Simple underlined field */
function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-lg text-slate-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-0 border-b border-slate-300 dark:border-slate-700 focus:border-slate-900 dark:focus:border-slate-200 outline-none py-3 text-xl"
      />
    </div>
  );
}
