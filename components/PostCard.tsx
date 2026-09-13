import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { POSTS, formatDate } from "@/lib/constants";

export default function PostCard({
  post: p,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  post: (typeof POSTS)[number];
  sizes?: string;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700">
      <div className="relative aspect-16/9 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={p.img}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm dark:bg-slate-900/95 dark:text-slate-200">
          {p.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} /> {formatDate(p.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} /> {p.readMinutes} menit baca
          </span>
        </p>
        <h3 className="heading-sm mt-3 text-slate-900 dark:text-white">
          <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">
            {p.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-300">
          Baca selengkapnya <ArrowRight size={16} />
        </span>
      </div>
    </article>
  );
}
