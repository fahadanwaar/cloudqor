import Image from "next/image";

export const metadata = {
  title: "Fintech Platform Hardening | CloudQor",
  description:
    "Security posture, access control, and compliance automation for regulated fintech workloads — OPA policies, KMS, and audit trails.",
};

const GALLERY = [
  "/images/projects/fintech-platform-hardening/ui-1.jpg",
  "/images/projects/fintech-platform-hardening/ui-2.jpg",
  "/images/projects/fintech-platform-hardening/ui-3.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* bg accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-indigo-400 via-violet-500 to-fuchsia-400" />
        <div className="absolute -bottom-20 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-emerald-400 via-cyan-400 to-blue-400" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Regulated workloads (PCI/SOC2)
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#111827_0%,#334155_50%,#64748B_100%)] dark:bg-[linear-gradient(90deg,#ffffff_0%,#e5e7eb_60%,#cbd5e1_100%)]">
            Fintech Platform Hardening
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          End-to-end security posture with realtime threats, least-privilege access, and compliance
          automation — built for PCI/SOC2/ISO environments with auditable policy controls.
        </p>

        {/* CTAs + KPIs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#highlights"
            className="rounded-xl px-5 py-3 border border-slate-300/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            View highlights
          </a>
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 text-white bg-gradient-to-tr from-slate-800 to-slate-600 hover:opacity-95 shadow-lg"
          >
            Discuss this project
          </a>

          <div className="ml-auto flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold">90%+</div>
              <div className="text-slate-500">controls coverage</div>
            </div>
            <div>
              <div className="text-2xl font-bold">≤15m</div>
              <div className="text-slate-500">JIT access TTL</div>
            </div>
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: narrative + sections */}
        <div className="md:col-span-7 space-y-8">
          {/* Highlights */}
          <div
            id="highlights"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>Central posture: encryption, network, patch SLOs, drift.</li>
              <li>OPA policy-as-code with CI checks and change approvals.</li>
              <li>KMS-backed tokenization, envelope encryption, key rotation.</li>
              <li>Row-level access + JIT elevation with full audit stream.</li>
              <li>Controls mapping across PCI DSS, SOC 2, ISO 27001, GDPR.</li>
            </ul>
          </div>

          {/* Section: Security Posture Dashboard */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold mb-3">Security Posture Dashboard</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              End-to-end crypto posture with realtime threats and drift detection.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li><strong>Encryption status</strong> at-rest/in-transit across services.</li>
              <li><strong>PCI segment drift</strong> with automated quarantine playbooks.</li>
              <li><strong>Patch SLOs</strong> (critical/high) with burn-down and exceptions.</li>
              <li><strong>Anomaly feed</strong> (CSPM, IAM, CI/CD, runtime) with severity.</li>
              <li><strong>Tokenization/KMS panel</strong> (key health, rotation, usage).</li>
            </ul>
          </div>

            {/* Section: Access Control & Policies */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold mb-3">Access Control & Policies</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Least-privilege by default with JIT elevation and auditable policies.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li><strong>RBAC</strong> roles scoped to services, envs, and data domains.</li>
              <li><strong>JIT access</strong> via approvals with auto-revoke (≤15 min TTL).</li>
              <li><strong>API scopes & secrets</strong> with rotation SLAs.</li>
              <li>
                <strong>Policy-as-code (OPA)</strong> — live snippet:
                <pre className="mt-2 rounded-lg bg-slate-900/90 text-slate-100 p-3 text-xs overflow-x-auto">
{`package access

default allow = false

# Only SRE or Security can access prod; must be within business hours.
allow {
  input.env == "prod"
  input.role in {"sre", "security"}
  time.hour >= 9
  time.hour <= 18
}`}
                </pre>
              </li>
            </ul>
          </div>

          {/* Section: Compliance & Audit */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold mb-3">Compliance & Audit</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Automated evidence and immutable trails for auditors and IR teams.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li><strong>Controls coverage:</strong> PCI DSS, SOC 2, ISO 27001, GDPR.</li>
              <li><strong>Evidence Locker:</strong> artifacts, screenshots, pipeline logs.</li>
              <li><strong>Immutable Audit Stream:</strong> signed deploys & key rotations.</li>
              <li><strong>Continuous compliance:</strong> failing controls auto-ticketed.</li>
            </ul>
          </div>

          {/* mini gallery */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
            <div className="mb-2 text-sm text-slate-500">UI preview</div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
              {["/images/projects/fintech-platform-hardening/cover.jpg", ...GALLERY].map((src) => (
                <div key={src} className="relative snap-start shrink-0 w-[320px] h-[220px] rounded-xl overflow-hidden shadow-sm">
                  <Image src={src} alt="Fintech hardening UI" fill className="object-cover" sizes="320px" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Featured image + thumbs */}
        <aside className="md:col-span-5 md:sticky md:top-24">
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-500 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src="/images/projects/fintech-platform-hardening/cover.jpg"
                alt="Fintech Platform Hardening — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {GALLERY.map((src) => (
              <div key={src} className="p-[2px] rounded-xl bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow">
                <div className="relative aspect-square rounded-[10px] overflow-hidden">
                  <Image src={src} alt="Fintech hardening detail" fill className="object-cover" sizes="(max-width: 768px) 100vw, 13vw" />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div id="contact" className="sr-only" />
    </section>
  );
}
