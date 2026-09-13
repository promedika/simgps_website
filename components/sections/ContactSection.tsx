import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, waLink } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactSection() {
  return (
    <section id="kontak" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-app grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Kontak</span>
          <h2 className="heading-md mt-4">Diskusikan kebutuhan faskes Anda</h2>
          <p className="mt-4 text-muted">
            Ceritakan kondisi pengelolaan aset di instansi Anda, tim kami akan menyiapkan
            rekomendasi dan jadwal demo.
          </p>

          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-700 dark:text-brand-300" />
              <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {COMPANY.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-brand-700 dark:text-brand-300" />
              <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="hover:underline">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-brand-700 dark:text-brand-300" />
              <a href={`mailto:${COMPANY.email}`} className="hover:underline">
                {COMPANY.email}
              </a>
            </li>
          </ul>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6 w-full sm:w-auto"
          >
            <WhatsAppIcon size={18} /> Chat WhatsApp
          </a>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&z=15&output=embed`}
              title="Lokasi PT Global Promedika Service"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-52 w-full border-0"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
