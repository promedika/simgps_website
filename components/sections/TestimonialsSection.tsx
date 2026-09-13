import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="section">
      <div className="container-app">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimoni</span>
          <h2 className="heading-md mt-4">Kata pengguna SIMGPS</h2>
          <p className="mt-4 text-muted">
            Pengalaman langsung dari tim penunjang medis, IPSRS, dan pengelola aset faskes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className="card flex flex-col">
              <div className="flex gap-0.5" aria-label="Penilaian 5 dari 5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                <span className="block text-sm font-bold text-slate-900 dark:text-white">
                  {t.author}
                </span>
                <span className="block text-xs text-muted">{t.role}</span>
                <span className="mt-0.5 block text-xs font-semibold text-brand-700 dark:text-brand-300">
                  {t.hospital}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
