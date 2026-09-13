"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { POSTS, POSTS_PER_PAGE } from "@/lib/constants";
import { cn } from "@/lib/cn";
import PostCard from "@/components/PostCard";

// ponytail: paging di sisi klien karena seluruh artikel sudah ada di bundel;
// pindah ke rute /blog?page=n kalau jumlah artikel sudah puluhan
export default function BlogSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const shown = POSTS.slice(start, start + POSTS_PER_PAGE);

  return (
    <section id="artikel" className="section">
      <div className="container-app">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Artikel</span>
            <h2 className="heading-md mt-4">Panduan pengelolaan aset &amp; kalibrasi</h2>
            <p className="mt-4 text-muted">
              Catatan praktis dari pendampingan implementasi di fasilitas kesehatan, ditulis tim
              SIMGPS.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        <nav
          aria-label="Navigasi halaman artikel"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => setPage((n) => Math.max(1, n - 1))}
            disabled={page === 1}
            aria-label="Halaman sebelumnya"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-label={`Halaman ${n}`}
              aria-current={n === page ? "page" : undefined}
              className={cn(
                "size-10 rounded-xl border text-sm font-semibold transition-colors",
                n === page
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800",
              )}
            >
              {n}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setPage((n) => Math.min(totalPages, n + 1))}
            disabled={page === totalPages}
            aria-label="Halaman berikutnya"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <ChevronRight size={18} />
          </button>
        </nav>

        <p aria-live="polite" className="mt-3 text-center text-sm text-muted">
          Menampilkan {start + 1}&ndash;{start + shown.length} dari {POSTS.length} artikel
        </p>
      </div>
    </section>
  );
}
