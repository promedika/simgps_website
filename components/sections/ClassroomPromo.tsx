import { Check, GraduationCap } from "lucide-react";
import { CLASSROOM_MODULES, waLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ClassroomPromo() {
  return (
    <section id="classroom" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-app">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:grid-cols-12 dark:border-slate-800 dark:bg-slate-900">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <GraduationCap size={14} /> Pelatihan gratis
            </span>
            <h2 className="heading-md mt-4">Classroom SIMGPS</h2>
            <p className="mt-4 text-muted">
              Pelatihan daring penggunaan sistem inventori untuk seluruh pengguna, dipandu tim IT
              Department PT Global Promedika Service. Tanpa biaya tambahan.
            </p>
            <a
              href={waLink("Halo GPS, saya ingin mendaftar Classroom SIMGPS.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full sm:w-auto"
            >
              <WhatsAppIcon size={18} /> Daftar Sesi Pelatihan
            </a>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Materi yang dibahas
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {CLASSROOM_MODULES.map((m) => (
                <li
                  key={m}
                  className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-3.5 py-3 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <Check size={16} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
