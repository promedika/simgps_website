import { ArrowRight, CalendarCheck, Clock3, BadgeCheck } from "lucide-react";
import { waLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const ASSURANCE = [
  { icon: Clock3, text: "Demo 30 menit, jadwal menyesuaikan Anda" },
  { icon: BadgeCheck, text: "Gratis, tanpa ikatan kontrak" },
  { icon: CalendarCheck, text: "Dibalas pada jam kerja 08.00–17.00 WIB" },
];

export default function CtaSection() {
  return (
    <section className="section relative overflow-hidden bg-brand-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-brand-700/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-amber-500/20 blur-3xl"
      />

      <div className="container-app relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
          Kuota demo bulan ini terbatas
        </span>

        <h2 className="heading-md mx-auto mt-5 max-w-3xl text-white">
          Berhenti mengejar data aset. Mulai kendalikan dari satu layar.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Jadwalkan demo gratis 30 menit. Kami tunjukkan langsung bagaimana SIMGPS bekerja memakai
          contoh data aset milik instansi Anda — bukan sekadar presentasi.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink("Halo GPS, saya ingin menjadwalkan demo gratis SIMGPS untuk instansi saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full px-7 py-4 text-base sm:w-auto"
          >
            <WhatsAppIcon size={20} /> Jadwalkan Demo Gratis <ArrowRight size={18} />
          </a>
          <a href="#kontak" className="btn-quiet w-full px-7 py-4 text-base sm:w-auto">
            <CalendarCheck size={18} /> Kirim Kebutuhan Lewat Formulir
          </a>
        </div>

        <ul className="mx-auto mt-7 flex max-w-3xl flex-col items-center justify-center gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {ASSURANCE.map((a) => (
            <li key={a.text} className="flex items-center gap-2">
              <a.icon size={16} className="shrink-0 text-amber-400" />
              {a.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
