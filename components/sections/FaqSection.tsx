import { ChevronDown } from "lucide-react";
import { FAQS, waLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="container-app grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-md mt-4">Pertanyaan yang sering diajukan</h2>
          <p className="mt-4 text-muted">
            Belum menemukan jawabannya? Tim kami siap menjelaskan lewat WhatsApp.
          </p>
          <a
            href={waLink("Halo GPS, saya ingin bertanya mengenai SIMGPS.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6 w-full sm:w-auto"
          >
            <WhatsAppIcon size={18} /> Tanya Tim Kami
          </a>
        </div>

        {/* ponytail: <details> native — cukup untuk akordeon; ganti kalau butuh animasi tinggi */}
        <div className="divide-y divide-slate-200 lg:col-span-8 dark:divide-slate-800">
          {FAQS.map((f) => (
            <details key={f.q} name="faq" className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 marker:content-none dark:text-white">
                {f.q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
