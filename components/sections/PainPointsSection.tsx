import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PAIN_POINTS } from "@/lib/constants";

export default function PainPointsSection() {
  return (
    <section id="masalah" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-app">
        <div className="max-w-2xl">
          <span className="eyebrow">Kenapa perlu berubah</span>
          <h2 className="heading-md mt-4">
            Masalah yang sering terjadi di IPSRS — dan cara SIMGPS menyelesaikannya
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PAIN_POINTS.map((p) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[p.icon];
            return (
              <div key={p.problem} className="card">
                <div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">
                  {Icon ? <Icon size={20} /> : null}
                </div>
                <p className="mt-4 font-semibold text-slate-900 dark:text-white">{p.problem}</p>
                <p className="mt-3 flex gap-2 text-sm leading-relaxed text-muted">
                  <ArrowRight
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                  />
                  {p.solution}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
