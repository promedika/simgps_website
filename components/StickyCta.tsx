import { CalendarCheck } from "lucide-react";
import { waLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/** Aksi cepat yang menempel di bawah layar mobile; disembunyikan pada layar besar. */
export default function StickyCta({ contactHref = "#kontak" }: { contactHref?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden dark:border-slate-800 dark:bg-slate-950/95">
      <div className="flex gap-2">
        <a href={contactHref} className="btn-secondary flex-1 px-3 py-2.5 text-sm">
          <CalendarCheck size={16} /> Kirim Pesan
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 px-3 py-2.5 text-sm"
        >
          <WhatsAppIcon size={16} /> Minta Demo
        </a>
      </div>
    </div>
  );
}
