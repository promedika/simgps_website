import { Building2 } from "lucide-react";
import { CLIENTS } from "@/lib/constants";

export default function ClientsSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-app">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Dipercaya fasilitas kesehatan di Indonesia
        </p>
      </div>

      {/* ponytail: teks placeholder; ganti dengan <Image> logo klien bila izin pakai sudah ada */}
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              aria-hidden={i >= CLIENTS.length}
              className="flex w-64 shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                <Building2 size={18} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold text-slate-900 dark:text-white">
                  {c.name}
                </span>
                <span className="block truncate text-xs text-muted">{c.type}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
