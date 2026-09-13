import Image from "next/image";
import { Building2, MapPin, Mail, Phone, Target, Users } from "lucide-react";
import { COMPANY, STATS } from "@/lib/constants";

const PILLARS = [
  {
    icon: Target,
    title: "Fokus pada alat kesehatan",
    desc: "Sistem dirancang mengikuti alur kerja IPSRS dan penunjang medis, bukan aplikasi inventori umum yang dipaksakan.",
  },
  {
    icon: Users,
    title: "Pendampingan sampai terpakai",
    desc: "Survei aset, penempelan QR Code, input data, hingga pelatihan pengguna dikerjakan bersama tim kami.",
  },
  {
    icon: Building2,
    title: "Pengalaman lapangan",
    desc: "PT Global Promedika Service melayani pengadaan dan pemeliharaan alat kesehatan di berbagai fasilitas kesehatan Indonesia.",
  },
];

const CONTACTS = [
  { icon: MapPin, label: COMPANY.address, href: COMPANY.mapsUrl },
  { icon: Phone, label: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/[^\d+]/g, "")}` },
  { icon: Mail, label: COMPANY.email, href: `mailto:${COMPANY.email}` },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-app">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <span className="eyebrow">Tentang Kami</span>
            <h2 className="heading-md mt-4">
              Dikembangkan oleh tim yang memahami kebutuhan fasilitas kesehatan
            </h2>
            <p className="mt-5 text-muted">
              SIMGPS lahir dari pekerjaan sehari-hari di lapangan: data alat yang tersebar, jadwal
              kalibrasi yang terlewat, dan laporan ASPAK yang disusun manual menjelang tenggat. Kami
              menyatukannya menjadi satu sistem yang bisa dipakai seluruh unit.
            </p>
            <p className="mt-4 text-muted">
              Pengembangan dan dukungan teknis dikerjakan oleh IT Department PT Global Promedika
              Service, sehingga permintaan penyesuaian modul dapat ditangani langsung tanpa
              perantara.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-2xl font-extrabold tracking-tight text-brand-900 dark:text-white">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-xs text-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <ul className="grid gap-4">
              {PILLARS.map((p) => (
                <li
                  key={p.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                    <p.icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="heading-sm text-slate-900 dark:text-white">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
                <Image
                  src="/images/logos/simgps-logo.svg"
                  alt="SIMGPS"
                  width={120}
                  height={47}
                  className="h-8 w-auto dark:brightness-0 dark:invert"
                />
                <span className="min-w-0 truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {COMPANY.name}
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {CONTACTS.map((c) => (
                  <li key={c.label} className="flex gap-3">
                    <c.icon size={17} className="mt-0.5 shrink-0 text-brand-700 dark:text-brand-300" />
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-relaxed text-muted hover:text-brand-700 dark:hover:text-brand-300"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
