import { Check } from "lucide-react";
import { STEPS } from "@/lib/constants";

export default function StepsSection() {
  return (
    <section id="cara-kerja" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-app">
        <div className="max-w-2xl">
          <span className="eyebrow">Cara kerja</span>
          <h2 className="heading-md mt-4">Tiga tahap sampai sistem siap dipakai</h2>
          <p className="mt-4 text-muted">
            Tim kami mendampingi dari survei lapangan hingga seluruh pengguna terlatih.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.no} className="card flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-sm font-bold text-white dark:bg-brand-600">
                  {s.no}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {s.who}
                </span>
              </div>
              <h3 className="heading-sm mt-4">{s.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted">
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
