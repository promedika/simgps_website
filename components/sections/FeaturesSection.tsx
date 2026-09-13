import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { FEATURES } from "@/lib/constants";

export default function FeaturesSection() {
  return (
    <section id="fitur" className="section">
      <div className="container-app">
        <div className="max-w-2xl">
          <span className="eyebrow">Fitur</span>
          <h2 className="heading-md mt-4">Modul yang dipakai tim Anda setiap hari</h2>
          <p className="mt-4 text-muted">
            Tujuh modul utama yang saling terhubung, dari pencatatan aset sampai pencetakan booklet
            kalibrasi.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[f.icon];
            return (
              <article key={f.title} className="card flex flex-col">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                  {Icon ? <Icon size={20} /> : null}
                </div>
                <h3 className="heading-sm mt-4">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
