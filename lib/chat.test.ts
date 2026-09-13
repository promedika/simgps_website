import assert from "node:assert";
import { matchTopic } from "./chat.ts";

// kata kunci cocok -> topik relevan
assert.match(matchTopic("berapa biaya lisensinya?")?.q ?? "", /biaya/i);
assert.match(matchTopic("apakah laporan ASPAK bisa?")?.q ?? "", /ASPAK/i);
assert.match(matchTopic("mau demo dong")?.q ?? "", /demo/i);

// tanpa kecocokan -> undefined agar UI mengalihkan ke WhatsApp
assert.equal(matchTopic("xyz qwerty"), undefined);
assert.equal(matchTopic("   "), undefined);

console.log("PASS: chat.test.ts");
