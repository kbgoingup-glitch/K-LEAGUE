import { readFile, writeFile } from "node:fs/promises";

// Weekly refresh helper. It verifies the official record pages are reachable,
// then advances the visible edition date. Editorial match notes remain reviewed
// by a human/agent before publication because MOM and story context are judgments.
const sources = [
  "https://www.kleague.com/record/team.do",
  "https://www.kleague.com/record/player.do",
  "https://www.kleague.com/schedule.do?leagueId=1"
];

for (const url of sources) {
  const response = await fetch(url, { headers: { "user-agent": "K-League-In-Ink/1.0" } });
  if (!response.ok) throw new Error(`Source unavailable: ${url} (${response.status})`);
}

const date = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
const pretty = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Seoul", day: "2-digit", month: "short", year: "numeric" }).format(new Date()).toUpperCase();
const htmlPath = new URL("../index.html", import.meta.url);
let html = await readFile(htmlPath, "utf8");
html = html.replace(/<time datetime="\d{4}-\d{2}-\d{2}">[^<]+<\/time>/, `<time datetime="${date}">${pretty}</time>`);
await writeFile(htmlPath, html);
console.log(`Verified official K League sources and stamped ${date}.`);
