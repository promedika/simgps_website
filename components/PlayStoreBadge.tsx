import { Smartphone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function PlayStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={COMPANY.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-2.5 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 ${className}`}
    >
      <Smartphone size={22} className="shrink-0 text-brand-700 dark:text-brand-300" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Unduh aplikasi Android
        </span>
        <span className="block text-sm font-bold text-slate-900 dark:text-white">
          Google Play Store
        </span>
      </span>
    </a>
  );
}
