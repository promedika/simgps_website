"use client";

import { useState } from "react";
import { Check, Facebook, Link2, Linkedin, Twitter } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// warna resmi tiap platform, ditulis inline karena hanya dipakai di sini
const ICON =
  "inline-flex size-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85";

export default function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const targets = [
    {
      label: "WhatsApp",
      icon: WhatsAppIcon,
      color: "#25D366",
      href: `https://wa.me/?text=${t}%20${u}`,
    },
    {
      label: "Facebook",
      icon: Facebook,
      color: "#1877F2",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    },
    {
      label: "X",
      icon: Twitter,
      color: "#0F1419",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      color: "#0A66C2",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // clipboard API butuh konteks aman; fallback agar tautan tetap bisa disalin manual
      window.prompt("Salin tautan artikel:", url);
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6 dark:border-slate-800">
      <span className="mr-1 w-full text-sm font-semibold text-slate-900 sm:w-auto dark:text-white">
        Bagikan artikel
      </span>

      {targets.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.label}
          aria-label={`Bagikan ke ${s.label}`}
          className={ICON}
          style={{ backgroundColor: s.color }}
        >
          <s.icon size={18} />
        </a>
      ))}

      <button
        type="button"
        onClick={copy}
        title={copied ? "Tersalin" : "Salin tautan"}
        aria-label={copied ? "Tautan tersalin" : "Salin tautan"}
        className={`${ICON} bg-slate-600 dark:bg-slate-700`}
      >
        {copied ? <Check size={18} /> : <Link2 size={18} />}
      </button>
    </div>
  );
}
