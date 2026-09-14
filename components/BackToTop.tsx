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

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "none" : "translateY(12px) scale(0.9)",
        visibility: show ? "visible" : "hidden",
      }}
      className="fixed bottom-38 right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl sm:bottom-24 sm:right-6 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
    >
      <ArrowUp size={20} />
    </button>
  );
}
