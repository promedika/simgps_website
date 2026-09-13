import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { COMPANY, FAQS, SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const DESCRIPTION =
  "SIMGPS membantu rumah sakit, klinik, dan puskesmas mencatat aset medis, menjadwalkan kalibrasi dan maintenance, mengelola tiket perbaikan, serta menyiapkan laporan siap unggah ASPAK dalam satu sistem.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SIMGPS — Sistem Manajemen Inventori Alat Kesehatan & Kalibrasi PT GPS",
    template: "%s | SIMGPS",
  },
  description: DESCRIPTION,
  applicationName: "SIMGPS",
  keywords: [
    "SIMGPS",
    "sistem inventori alat kesehatan",
    "manajemen aset rumah sakit",
    "kalibrasi alat kesehatan",
    "maintenance alat medis",
    "laporan ASPAK",
    "software IPSRS",
    "PT Global Promedika Service",
  ],
  authors: [{ name: COMPANY.name, url: COMPANY.website }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/images/logos/simgps-icon.svg",
    apple: "/images/logos/simgps-icon.svg",
  },
  openGraph: {
    siteName: "SIMGPS",
    url: "/",
    title: "SIMGPS — Sistem Manajemen Inventori Alat Kesehatan & Kalibrasi",
    description: DESCRIPTION,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIMGPS — Sistem Manajemen Inventori Alat Kesehatan & Kalibrasi",
    description: DESCRIPTION,
  },
};

// ponytail: JSON-LD ringkas (produk + FAQ); tambah Organization terpisah kalau nanti ada halaman profil
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "SIMGPS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      description: DESCRIPTION,
      url: SITE_URL,
      downloadUrl: COMPANY.playStoreUrl,
      offers: { "@type": "Offer", priceCurrency: "IDR", price: "0" },
      publisher: {
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.website,
        email: COMPANY.email,
        telephone: COMPANY.phone,
        address: { "@type": "PostalAddress", streetAddress: COMPANY.address, addressCountry: "ID" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// ponytail: script inline anti-flash tema; pindah ke next-themes kalau nanti butuh sinkron multi-tab
const themeScript = `try{var s=localStorage.getItem("theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
