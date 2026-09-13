"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Tombol kembali ke atas; muncul setelah gulir melewati satu layar. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      className="fixed bottom-38 right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-900 shadow-lg transition-colors hover:bg-slate-50 sm:bottom-24 sm:right-6 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
    >
      <ArrowUp size={20} />
    </button>
  );
}
