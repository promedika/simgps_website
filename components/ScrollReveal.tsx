"use client";

import { useEffect } from "react";

// ponytail: satu observer global menandai blok konten di dalam <main> lewat data-reveal.
// Tanpa JS semua konten tetap terlihat (atribut baru dipasang saat runtime).
// Ganti ke komponen pembungkus per-elemen kalau nanti butuh animasi yang berbeda per section.
const SELECTOR = "main .container-app > *";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // elemen yang sudah terlihat saat muat dibiarkan apa adanya supaya tidak berkedip
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9,
    );
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.reveal = "in";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    const order = new Map<Element, number>();
    for (const el of targets) {
      const parent = el.parentElement as Element;
      const i = order.get(parent) ?? 0;
      order.set(parent, i + 1);
      el.dataset.reveal = "";
      el.style.setProperty("--reveal-delay", `${Math.min(i, 3) * 70}ms`);
      io.observe(el);
    }

    return () => io.disconnect();
  }, []);

  return null;
}
