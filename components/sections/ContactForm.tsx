"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const LABEL = "mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          institution: fd.get("institution"),
          message: fd.get("message"),
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      setMessage(data.message as string);
      if (data.success) form.reset();
    } catch {
      setStatus("error");
      setMessage("Gagal mengirim, coba lagi.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={LABEL}>
            Nama lengkap
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field" />
        </div>

        <div>
          <label htmlFor="email" className={LABEL}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>

        <div>
          <label htmlFor="phone" className={LABEL}>
            No. telepon / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\-\s()]{8,20}"
            className="field"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="institution" className={LABEL}>
            Nama instansi / faskes
          </label>
          <input
            id="institution"
            name="institution"
            type="text"
            required
            autoComplete="organization"
            className="field"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={LABEL}>
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Contoh: kami mengelola ±800 alat medis dan ingin merapikan jadwal kalibrasi."
            className="field resize-y"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-6 w-full disabled:opacity-60"
      >
        <Send size={16} /> {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
      </button>

      <p aria-live="polite" className="mt-4 empty:hidden">
        {status === "success" && (
          <span className="flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 size={16} /> {message}
          </span>
        )}
        {status === "error" && (
          <span className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
            <AlertCircle size={16} /> {message}
          </span>
        )}
      </p>
    </form>
  );
}
