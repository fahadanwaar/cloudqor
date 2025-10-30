export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="container-page py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} CloudQor. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@cloudqor.example" className="hover:underline">hello@cloudqor.example</a>
          <a href="https://x.com/" className="hover:underline">X</a>
          <a href="https://www.linkedin.com/" className="hover:underline">LinkedIn</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
