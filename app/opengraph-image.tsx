import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "SIMGPS — Sistem Manajemen Inventori Alat Kesehatan & Kalibrasi PT Global Promedika Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// logo SVG disisipkan sebagai data URI karena next/og tidak bisa memuat file lokal lewat path
const logo = `data:image/svg+xml;base64,${readFileSync(
  join(process.cwd(), "public/images/logos/simgps-logo.svg"),
).toString("base64")}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          padding: 80,
          background: "linear-gradient(135deg, #0a1a4a 0%, #182e63 55%, #234084 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "26px 40px",
            borderRadius: 32,
            background: "#ffffff",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="SIMGPS" width={560} height={219} />
        </div>
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, lineHeight: 1.25 }}>
          Sistem Manajemen Inventori Alat Kesehatan &amp; Kalibrasi
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#c5d7f3", lineHeight: 1.4 }}>
          Inventori aset • Kalibrasi terjadwal • Maintenance • Laporan siap ASPAK
        </div>
      </div>
    ),
    size,
  );
}
