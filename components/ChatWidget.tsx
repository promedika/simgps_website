"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Headset, Send } from "lucide-react";
import { CHAT_TOPICS, waLink } from "@/lib/constants";
import { matchTopic, type Topic } from "@/lib/chat";
import WhatsAppIcon from "@/components/WhatsAppIcon";

type Msg = { from: "tim" | "user"; text: string; topic?: Topic };

const GREETING: Msg = {
  from: "tim",
  text: "Halo! Selamat datang di layanan informasi SIMGPS. Pilih pertanyaan di bawah atau tulis pertanyaan Anda sendiri.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  // anchor topik menunjuk section beranda; di halaman lain perlu diawali "/"
  const onHome = usePathname() === "/";

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [msgs, open]);

  // saran menyusut setiap kali topik dipakai, jadi tidak menutupi percakapan
  const asked = new Set(msgs.filter((m) => m.from === "user").map((m) => m.text));
  const suggestions = (CHAT_TOPICS as readonly Topic[]).filter((t) => !asked.has(t.q)).slice(0, 3);

  function answer(topic: Topic) {
    setMsgs((m) => [...m, { from: "user", text: topic.q }, { from: "tim", text: topic.a, topic }]);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = draft.trim().slice(0, 300);
    if (!text) return;
    setDraft("");
    const topic = matchTopic(text);
    setMsgs((m) => [
      ...m,
      { from: "user", text },
      topic
        ? { from: "tim", text: topic.a, topic }
        : {
            from: "tim",
            text: "Pertanyaan itu perlu dijawab langsung oleh tim kami. Silakan lanjut lewat WhatsApp agar dibantu lebih detail.",
            topic: { q: "", a: "", wa: `Halo GPS, saya ingin bertanya: ${text}` },
          },
    ]);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="panel-chat"
        aria-label={open ? "Tutup obrolan" : "Buka obrolan bantuan"}
        className="fixed bottom-24 right-4 z-50 inline-flex size-13 items-center justify-center rounded-full bg-brand-900 text-white shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:right-6 dark:bg-brand-600"
      >
        {open ? <X size={22} /> : <Headset size={22} />}
      </button>

      {open && (
        <div
          id="panel-chat"
          role="dialog"
          aria-label="Obrolan bantuan SIMGPS"
          className="fixed inset-x-3 bottom-40 z-50 flex h-[min(28rem,58dvh)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:h-[min(32rem,70dvh)] sm:w-88 dark:border-slate-700 dark:bg-slate-900"
        >
          <div className="flex items-center gap-3 bg-brand-900 px-4 py-3 text-white dark:bg-brand-800">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-white/15">
              <Headset size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold">Bantuan SIMGPS</p>
              <p className="text-[11px] text-brand-100">Jawaban cepat seputar sistem &amp; demo</p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === "user" ? "flex justify-end" : ""}>
                <div
                  className={
                    m.from === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-brand-900 px-3.5 py-2.5 text-sm text-white dark:bg-brand-600"
                      : "max-w-[90%] rounded-2xl rounded-bl-sm bg-slate-100 px-3.5 py-2.5 text-sm leading-relaxed text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  }
                >
                  {m.text}
                  {m.topic?.href && (
                    <Link
                      href={
                        m.topic.href.startsWith("#") && !onHome
                          ? `/${m.topic.href}`
                          : m.topic.href
                      }
                      onClick={() => setOpen(false)}
                      className="mt-2 block text-xs font-bold text-brand-700 underline underline-offset-2 dark:text-brand-300"
                    >
                      {m.topic.hrefLabel}
                    </Link>
                  )}
                  {m.topic?.wa && (
                    <a
                      href={waLink(m.topic.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp mt-2.5 w-full px-3 py-2 text-xs sm:text-xs"
                    >
                      <WhatsAppIcon size={14} /> Lanjut ke WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
            {suggestions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {suggestions.map((t) => (
                  <button
                    key={t.q}
                    type="button"
                    onClick={() => answer(t)}
                    className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-600 dark:hover:text-white"
                  >
                    {t.q}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={onSubmit} className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-800">
            <label htmlFor="chat-input" className="sr-only">
              Tulis pertanyaan
            </label>
            <input
              id="chat-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={300}
              placeholder="Tulis pertanyaan Anda…"
              className="field min-w-0 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              aria-label="Kirim pertanyaan"
              className="btn-primary shrink-0 px-3 py-2 text-sm"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
