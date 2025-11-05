import Image from "next/image";

export const metadata = {
  title: "Multi-Cloud Migration | CloudQor",
  description:
    "Lift-and-shift + modernization to AWS/GCP/Azure with IaC, zero-downtime cutover, and cost optimization.",
};

const GALLERY = [
  "/images/projects/multi-cloud-migration/ui-1.jpg",
  "/images/projects/multi-cloud-migration/ui-2.jpg",
  "/images/projects/multi-cloud-migration/ui-3.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* subtle bg accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-sky-300 via-blue-400 to-indigo-400" />
        <div className="absolute -bottom-20 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-emerald-300 via-cyan-400 to-blue-400" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Production proven
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Multi-Cloud Migration
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          Lift-and-shift of legacy workloads plus targeted modernization to{" "}
          <strong>AWS/GCP/Azure</strong> using <strong>Terraform</strong> and
          GitOps. Zero-downtime cutovers, cost baselining, and SRE-grade operations.
        </p>

        {/* CTAs + KPIs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 text-white bg-gradient-to-tr from-sky-600 to-indigo-600 hover:opacity-95 shadow-lg"
          >
            Discuss this project
          </a>
          <a
            href="#highlights"
            className="rounded-xl px-5 py-3 border border-slate-300/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            View highlights
          </a>

          <div className="ml-auto flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold">0 min</div>
              <div className="text-slate-500">Planned downtime</div>
            </div>
            <div>
              <div className="text-2xl font-bold">25–40%</div>
              <div className="text-slate-500">Cost savings (avg)</div>
            </div>
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: Story */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
            We migrated a polyglot stack (APIs, batch jobs, and analytics) to a
            multi-cloud footing with repeatable infrastructure. Environments are
            stood up via Terraform modules, secrets flow through a centralized KMS,
            and delivery happens with GitHub Actions + ArgoCD. Traffic was drained
            with weighted DNS and blue-green cutovers to avoid downtime.
          </p>

          <div
            id="highlights"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>Terraform modules for VPC, EKS/GKE/AKS, RDS/CloudSQL, Redis.</li>
              <li>Zero-downtime cutover with blue/green + weighted DNS.</li>
              <li>FinOps pass: RI/SP coverage, storage tiering, autoscaling.</li>
              <li>Observability: OpenTelemetry, Grafana, and SLOs with alerts.</li>
              <li>Disaster recovery runbooks, cross-region backups tested.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-semibold mb-3">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS / GCP / Azure",
                "Terraform",
                "Kubernetes",
                "GitHub Actions",
                "ArgoCD",
                "Prometheus / Grafana",
                "OpenTelemetry",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* mini horizontal carousel (no deps) */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
            <div className="mb-2 text-sm text-slate-500">Architecture & UI</div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
              {["/images/projects/multi-cloud-migration/cover.jpg", ...GALLERY].map((src) => (
                <div
                  key={src}
                  className="relative snap-start shrink-0 w-[320px] h-[220px] rounded-xl overflow-hidden shadow-sm"
                >
                  <Image src={src} alt="Multi-cloud migration gallery" fill className="object-cover" sizes="320px" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: premium image stack */}
        <aside className="md:col-span-5 md:sticky md:top-24">
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src="/images/projects/multi-cloud-migration/cover.jpg"
                alt="Multi-Cloud Migration — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {GALLERY.map((src) => (
              <div
                key={src}
                className="p-[2px] rounded-xl bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow"
              >
                <div className="relative aspect-square rounded-[10px] overflow-hidden">
                  <Image
                    src={src}
                    alt="Multi-Cloud Migration — detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 13vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* optional contact anchor */}
      <div id="contact" className="sr-only" />
    </section>
  );
}
