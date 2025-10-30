export const metadata = { title: 'Contact — CloudQor' };

export default function ContactPage() {
  return (
    <section id="contact" className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact us</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Tell us about your project and we’ll get back within 1 business day.
      </p>
      <form action="https://formspree.io/f/your-id" method="POST" className="card p-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm">Name</span>
          <input required name="name" className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm">Email</span>
          <input required type="email" name="email" className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm">Message</span>
          <textarea required name="message" rows={6} className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent" />
        </label>
        <button className="btn btn-primary w-fit" type="submit">Send</button>
        <p className="text-xs text-slate-500">
          (Replace the form action with your own backend or Formspree ID.)
        </p>
      </form>
    </section>
  );
}
