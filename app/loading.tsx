/** Indikator saat berpindah rute (mis. membuka halaman artikel). */
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4">
      <span className="spinner" aria-hidden />
      <p role="status" className="text-sm font-medium text-muted">
        Memuat halaman…
      </p>
    </div>
  );
}
