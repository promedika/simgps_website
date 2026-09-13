"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BANNERS } from "@/lib/constants";
import { cn } from "@/lib/cn";

// ponytail: carousel scroll-snap native + timer sederhana; pakai embla kalau nanti butuh drag/loop tak terbatas
export default function BannerCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: track.clientWidth * i, behavior: "smooth" });
  };

  // geser otomatis; berhenti saat pengguna mengurangi animasi
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const next = (Math.round(track.scrollLeft / track.clientWidth) + 1) % BANNERS.length;
      track.scrollTo({ left: track.clientWidth * next, behavior: "smooth" });
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    // spacer atas memberi ruang untuk navbar yang posisinya fixed
    <section aria-label="Sorotan SIMGPS" className="pt-20 sm:pt-24">
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          onScroll={(e) =>
            setActive(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))
          }
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {BANNERS.map((b, i) => (
            <div
              key={b.title}
              className="relative aspect-16/9 w-full shrink-0 snap-center sm:aspect-21/9"
            >
              <Image
                src={b.img}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-brand-950/90 via-brand-950/70 to-brand-950/20" />
              <div className="container-app absolute inset-0 flex flex-col justify-center gap-2 py-5 sm:gap-3 sm:py-10">
                <span className="w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white sm:text-xs">
                  {b.tag}
                </span>
                <h2 className="max-w-xl text-lg font-extrabold text-white sm:text-2xl lg:text-4xl">
                  {b.title}
                </h2>
                <p className="max-w-md text-xs leading-relaxed text-slate-200 sm:text-sm lg:text-base">
                  {b.desc}
                </p>
                <a
                  href={b.href}
                  className="btn-accent mt-1 w-fit px-4 py-2 text-xs sm:mt-2 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  {b.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {[
          { icon: ChevronLeft, label: "Sorotan sebelumnya", to: -1, pos: "left-3" },
          { icon: ChevronRight, label: "Sorotan berikutnya", to: 1, pos: "right-3" },
        ].map((n) => (
          <button
            key={n.label}
            type="button"
            aria-label={n.label}
            onClick={() => goTo((active + n.to + BANNERS.length) % BANNERS.length)}
            className={cn(
              "absolute top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-md hover:bg-white sm:inline-flex",
              n.pos,
            )}
          >
            <n.icon size={20} />
          </button>
        ))}

        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {BANNERS.map((b, i) => (
            <button
              key={b.title}
              type="button"
              aria-label={`Ke sorotan ${i + 1}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === active ? "w-6 bg-white" : "w-1.5 bg-white/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
