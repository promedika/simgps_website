import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, QrCode, Wrench, ClipboardList } from "lucide-react";
import { waLink, STATS } from "@/lib/constants";
import PlayStoreBadge from "@/components/PlayStoreBadge";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const TRUST = ["Tanpa batas jumlah pengguna", "Rekap siap ASPAK", "Pendampingan implementasi"];

const PREVIEW_ROWS = [
  { icon: ShieldCheck, label: "Terkalibrasi", value: "1.184 alat", tone: "text-emerald-600 dark:text-emerald-400" },
  { icon: ClipboardList, label: "Wajib kalibrasi ≤ 3 bulan", value: "76 alat", tone: "text-amber-600 dark:text-amber-400" },
  { icon: Wrench, label: "Tiket perbaikan aktif", value: "12 tiket", tone: "text-brand-700 dark:text-brand-300" },
];

function HeroPreview() {
  return (
    <div className="reveal lg:col-span-6 [animation-delay:120ms]">
      <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6 lg:max-w-none dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 dark:border-slate-800">
          <Image
            src="/images/logos/simgps-logo.svg"
            alt="SIMGPS"
            width={132}
            height={48}
            priority
            className="h-9 w-auto dark:brightness-0 dark:invert"
          />
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
            Data terbarui
          </span>
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Ringkasan aset
        </p>

        <ul className="mt-3 space-y-2.5">
          {PREVIEW_ROWS.map((r) => (
            <li
              key={r.label}
              className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3.5 py-3 dark:bg-slate-800/70"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <r.icon size={18} className={`shrink-0 ${r.tone}`} />
                <span className="truncate text-sm text-slate-700 dark:text-slate-200">{r.label}</span>
              </span>
              <span className="shrink-0 text-sm font-bold text-slate-900 dark:text-white">
                {r.value}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-dashed border-slate-300 px-3.5 py-3 dark:border-slate-700">
          <QrCode size={20} className="shrink-0 text-brand-700 dark:text-brand-300" />
          <p className="text-xs leading-snug text-muted">
            Pindai QR Code pada alat untuk melihat riwayat kalibrasi &amp; perbaikan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-linear-to-b from-brand-50 to-transparent dark:from-brand-950/60"
      />

      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-6">
            <span className="eyebrow">
              <ShieldCheck size={14} /> Inventori · Kalibrasi · Maintenance
            </span>

            <h1 className="heading-lg mt-5">
              Satu sistem untuk semua{" "}
              <span className="text-brand-700 dark:text-brand-300">aset medis</span> fasilitas
              kesehatan Anda
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              SIMGPS mencatat seluruh alat, mengingatkan jadwal kalibrasi sebelum kedaluwarsa, dan
              menyiapkan laporan ASPAK — tanpa lagi menyusun data dari banyak file terpisah.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto"
              >
                <WhatsAppIcon size={18} /> Minta Demo Gratis <ArrowRight size={18} />
              </a>
              <a href="#fitur" className="btn-secondary w-full sm:w-auto">
                Lihat Fitur Lengkap
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-medium text-muted">
                  <CheckCircle2 size={16} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {t}
                </li>
              ))}
            </ul>

            <PlayStoreBadge className="mt-7" />
          </div>

          <HeroPreview />
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 rounded-2xl border border-slate-200 bg-white p-6 sm:mt-16 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-900">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl dark:text-white">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs font-medium text-muted sm:text-sm">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
