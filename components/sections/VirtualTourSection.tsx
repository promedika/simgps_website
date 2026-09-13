import { View, ExternalLink, MousePointerClick, Building2, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const HINTS = [
  { icon: MousePointerClick, text: "Geser layar untuk melihat ruangan 360°" },
  { icon: MapPin, text: "Pindah antar titik lewat penanda lokasi" },
  { icon: Building2, text: "Lihat penempatan alat pada tiap unit" },
];

export default function VirtualTourSection() {
  return (
    <section id="virtual-tour" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <span className="eyebrow">Tur 360°</span>
            <h2 className="heading-md mt-4">Telusuri ruangan rumah sakit tanpa datang ke lokasi</h2>
            <p className="mt-4 text-muted">
              Lihat tata letak ruangan dan penempatan alat secara interaktif langsung dari peramban,
              tanpa memasang aplikasi tambahan.
            </p>

            <ul className="mt-6 space-y-3">
              {HINTS.map((h) => (
                <li key={h.text} className="flex items-start gap-3 text-sm text-muted">
                  <h.icon size={18} className="mt-0.5 shrink-0 text-brand-700 dark:text-brand-300" />
                  {h.text}
                </li>
              ))}
            </ul>

            <a
              href={COMPANY.virtualTourUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-7 w-full sm:w-auto"
            >
              <View size={18} /> Buka di tab baru <ExternalLink size={15} />
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-2.5 dark:border-slate-800">
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="ml-2 truncate text-xs text-slate-500 dark:text-slate-400">
                  virtual-tour-rs.vercel.app
                </span>
              </div>
              <iframe
                src={COMPANY.virtualTourUrl}
                title="Virtual Tour Rumah Sakit"
                loading="lazy"
                allowFullScreen
                className="block h-[320px] w-full border-0 sm:h-[440px] lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
