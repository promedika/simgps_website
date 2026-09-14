import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { POSTS, SITE_URL, formatDate, waLink } from "@/lib/constants";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ShareBar from "@/components/ShareBar";
import PostCard from "@/components/PostCard";
import StickyCta from "@/components/StickyCta";
import BackToTop from "@/components/BackToTop";
import ChatWidget from "@/components/ChatWidget";
import ScrollReveal from "@/components/ScrollReveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [post.img],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.img,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "SIMGPS" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="konten" className="pt-28 pb-16 sm:pt-32 lg:pt-36 max-sm:pb-24">
        <article className="container-app">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/#artikel"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-300"
            >
              <ArrowLeft size={16} /> Semua artikel
            </Link>

            <span className="eyebrow mt-6 flex w-fit">{post.category}</span>
            <h1 className="heading-lg mt-4">{post.title}</h1>
            <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={15} /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} /> {post.readMinutes} menit baca
              </span>
            </p>

            <div className="relative mt-8 aspect-16/9 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
              <Image
                src={post.img}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 space-y-5">
              {post.body.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-slate-700 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <ShareBar url={`${SITE_URL}/blog/${post.slug}`} title={post.title} />

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="heading-sm text-slate-900 dark:text-white">
                Ingin melihat penerapannya di faskes Anda?
              </h2>
              <p className="mt-2 text-sm text-muted">
                Demo berlangsung sekitar 30 menit, gratis, dan memakai contoh data aset instansi
                Anda.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-5 w-full sm:w-auto"
              >
                <WhatsAppIcon size={18} /> Minta Demo Gratis
              </a>
            </div>

            {others.length > 0 && (
              <section className="mt-12">
                <h2 className="heading-sm text-slate-900 dark:text-white">Artikel lainnya</h2>
                <ul className="mt-4 grid gap-5 sm:grid-cols-2">
                  {others.map((p) => (
                    <li key={p.slug}>
                      <PostCard post={p} sizes="(min-width: 640px) 380px, 100vw" />
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
      {/* aksi cepat mobile mengarah ke form kontak di beranda karena halaman ini tanpa form */}
      <StickyCta contactHref="/#kontak" />
      <BackToTop />
      <ChatWidget />
      <ScrollReveal />
    </>
  );
}
