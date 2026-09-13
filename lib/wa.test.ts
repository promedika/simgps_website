import assert from "node:assert";
import { waLink, COMPANY } from "./constants.ts";

// Test WA link generator
const link = waLink("Test pesan");
assert(link.startsWith("https://wa.me/"), "WA link format salah");
assert(link.includes(COMPANY.waNumber), "WA number hilang");
assert(link.includes("Test%20pesan"), "Message encoding salah");

console.log("PASS: wa.test.ts");
