import { CHAT_TOPICS } from "./constants.ts";

export type Topic = { q: string; a: string; href?: string; hrefLabel?: string; wa?: string };

/** Cocokkan teks bebas ke topik terdekat lewat hitungan kata kunci. */
export function matchTopic(input: string): Topic | undefined {
  const words = input.toLowerCase().match(/[a-z]{4,}/g) ?? [];
  if (!words.length) return undefined;
  let best: { topic: Topic; score: number } | undefined;
  for (const topic of CHAT_TOPICS as readonly Topic[]) {
    const haystack = `${topic.q} ${topic.a}`.toLowerCase();
    const score = words.filter((w) => haystack.includes(w)).length;
    if (score > 0 && (!best || score > best.score)) best = { topic, score };
  }
  return best?.topic;
}
