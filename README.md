# SIMGPS Website

Landing page SIMGPS — Sistem Manajemen Inventori Alat Kesehatan & Kalibrasi milik PT Global Promedika Service.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script | Fungsi |
| --- | --- |
| `npm run dev` | Server pengembangan |
| `npm run build` | Build produksi |
| `npm start` | Menjalankan hasil build |
| `npm run lint` | ESLint via `next lint` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Self-check `lib/wa.test.ts` + `lib/chat.test.ts` (butuh Node 22+, `--experimental-strip-types`) |

## Environment

Semua opsional — nilai default ada di `lib/constants.ts`.

| Variabel | Default |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://simgps.id` |

Lihat `.env.example` untuk contoh variabel publik lain (nama perusahaan, nomor & pesan WhatsApp).

## Struktur

```
app/                  Route App Router
  page.tsx            Halaman utama (komposisi section)
  blog/[slug]/        Halaman artikel
  api/contact/        Endpoint form kontak (POST)
  sitemap.ts robots.ts opengraph-image.tsx twitter-image.tsx
components/sections/  Section landing page (Hero, Fitur, FAQ, Kontak, dst.)
components/           Widget lepas (ChatWidget, ThemeToggle, StickyCta, dst.)
lib/constants.ts      Sumber data tunggal: profil perusahaan, nav, FAQ, artikel
public/               Aset statis
```

## Catatan

- `lib/constants.ts` adalah satu-satunya sumber data konten. Ubah di sana, bukan di komponen.
- `POST /api/contact` saat ini hanya memvalidasi field lalu `console.log`. Sambungkan ke email/DB sebelum produksi.
- Gambar galeri masih memakai remote Pexels (`next.config.ts`); ganti ke `/public/images/gallery` saat foto asli siap.
