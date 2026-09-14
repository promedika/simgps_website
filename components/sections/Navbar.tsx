"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, waLink } from "@/lib/constants";
import { cn } from "@/lib/cn";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const SECTION_IDS = NAV_LINKS.flatMap((l) => l.href.split("#")[1] ?? []);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 16);
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // sorot tautan sesuai bagian yang sedang dibaca
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // kunci scroll saat panel mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-slate-200 bg-white/85 py-2.5 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85"
          : "border-b border-transparent py-4"
      )}
    >
      <div className="container-app flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/logos/simgps-icon.svg"
            alt=""
            width={36}
            height={36}
            priority
            className="size-9 rounded-lg"
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-brand-900 dark:text-white">
              SIMGPS
            </span>
            <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:block dark:text-slate-400">
              PT Global Promedika Service
            </span>
          </span>
        </Link>

        <nav aria-label="Menu utama" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active && l.href.endsWith(`#${active}`) ? "true" : undefined}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                "after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-300 hover:after:scale-x-100 dark:after:bg-brand-300",
                active && l.href.endsWith(`#${active}`)
                  ? "text-brand-800 after:scale-x-100 dark:text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-brand-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp hidden px-4 py-2.5 text-sm sm:inline-flex"
          >
            <WhatsAppIcon size={16} /> Minta Demo
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* garis kemajuan baca */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-600 transition-opacity duration-300 dark:bg-brand-400"
        style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
      />

      {open && (
        <div
          id="menu-mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] origin-top animate-[panel_.25s_cubic-bezier(0.22,1,0.36,1)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-8 pt-4 shadow-xl lg:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <nav aria-label="Menu utama mobile" className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3.5 text-base font-medium text-slate-700 dark:border-slate-800 dark:text-slate-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-whatsapp mt-6 w-full"
          >
            <WhatsAppIcon size={18} /> Minta Demo Gratis
          </a>
        </div>
      )}
    </header>
  );
}
