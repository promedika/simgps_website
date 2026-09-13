import { BENEFITS } from "@/lib/constants";

export default function BenefitsSection() {
  return (
    <section id="keunggulan" className="section bg-brand-950 text-slate-300">
      <div className="container-app">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Keunggulan
          </span>
          <h2 className="heading-md mt-4 text-white">Alasan faskes memilih SIMGPS</h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.no} className="bg-brand-950 p-6">
              <span className="text-sm font-bold text-amber-400">{b.no}</span>
              <h3 className="mt-3 text-base font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
