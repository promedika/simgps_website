import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/constants";

export default function GallerySection() {
  return (
    <section id="galeri" className="section">
      <div className="container-app">
        <div className="max-w-2xl">
          <span className="eyebrow">Galeri</span>
          <h2 className="heading-md mt-4">Tampilan sistem yang mudah dipelajari</h2>
          <p className="mt-4 text-muted">
            Antarmuka sederhana untuk pekerjaan yang rumit — dari inventori aset sampai laporan
            kalibrasi siap ASPAK.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, i) => (
            <figure
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading={i < 3 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm dark:bg-slate-900/95 dark:text-slate-200">
                  {item.category}
                </figcaption>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
