import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl/tight md:text-5xl font-bold">CloudQor
          <span className="block text-xl md:text-2xl font-medium text-slate-500">Cloud consulting, done right.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
          We design and deliver scalable cloud platforms, observability, and delightful dashboards.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/dashboard" className="btn btn-primary">View Dashboard</Link>
          <Link href="/portfolio" className="btn">Portfolio</Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
        <Image src="/cloudqor-icon.png" alt="CloudQor" fill className="object-contain p-10 bg-brand/5" />
      </div>
    </section>
  );
}
