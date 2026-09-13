import Link from "next/link";
import Image from "next/image";
import { Instagram, Globe, Smartphone } from "lucide-react";
import { COMPANY, waLink, NAV_LINKS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const SOCIALS = [
  { href: `https://wa.me/${COMPANY.waNumber}`, icon: WhatsAppIcon, label: "WhatsApp" },
  { href: COMPANY.instagram1, icon: Instagram, label: "Instagram" },
  { href: COMPANY.website, icon: Globe, label: "Situs perusahaan" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-14 text-slate-400">
      <div className="container-app">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logos/simgps-icon.svg"
                alt=""
                width={34}
                height={34}
                className="size-8.5"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">SIMGPS</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Sistem manajemen inventori alat kesehatan dari {COMPANY.name}. Terintegrasi untuk
              kalibrasi, maintenance, dan pelaporan ASPAK.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-4 py-2.5 text-sm"
              >
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
              <a
                href={COMPANY.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-slate-700 px-4 py-2.5 text-sm text-white hover:bg-slate-800"
              >
                <Smartphone size={16} /> Google Play
              </a>
            </div>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Navigasi</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Kontak</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {COMPANY.address}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-800 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-slate-800 pt-6 text-center text-xs">
          &copy; {year} {COMPANY.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
