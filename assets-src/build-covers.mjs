/**
 * 生成 8 个项目封面 SVG（800×500）+ 3 张博客封面 + OG 分享图，输出到 public/。
 * 重跑：node assets-src/build-covers.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const MONO = "Consolas, 'Courier New', monospace";
const SANS = "'Segoe UI', system-ui, -apple-system, Arial, sans-serif";

function dotGrid(w, h, color = "#FFFFFF", opacity = 0.05) {
  let dots = "";
  for (let x = 40; x < w; x += 48) {
    for (let y = 40; y < h; y += 48) {
      dots += `<circle cx="${x}" cy="${y}" r="1.6" fill="${color}" opacity="${opacity}"/>`;
    }
  }
  return dots;
}

function cover({ file, title, subtitle, from, to, accent, glyph }) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${accent}"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg)"/>
  ${dotGrid(800, 500)}
  <circle cx="660" cy="110" r="150" fill="${accent}" opacity="0.10"/>
  <circle cx="720" cy="420" r="90" fill="${accent}" opacity="0.08"/>
  ${glyph}
  <rect x="56" y="356" width="120" height="7" rx="3.5" fill="url(#bar)"/>
  <text x="56" y="416" font-family="${SANS}" font-size="44" font-weight="700" fill="#F8FAFC">${title}</text>
  <text x="56" y="452" font-family="${MONO}" font-size="19" fill="${accent}">${subtitle}</text>
</svg>`;
  const dir = join(root, "public", "projects");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, file), svg.replace(/\n\s*\n/g, "\n"));
  console.log("wrote public/projects/" + file);
}

/* ---------- glyph 库（每个都是 800x500 画布上的独立组合） ---------- */

const G = {
  terminal: (a) => `
  <rect x="470" y="110" width="270" height="180" rx="18" fill="#0B0F18" stroke="${a}" stroke-opacity="0.5" stroke-width="2"/>
  <rect x="470" y="110" width="270" height="36" rx="18" fill="#141C2E"/>
  <circle cx="494" cy="128" r="5" fill="#FF5F57"/><circle cx="512" cy="128" r="5" fill="#FEBC2E"/><circle cx="530" cy="128" r="5" fill="#28C840"/>
  <text x="492" y="180" font-family="${MONO}" font-size="20" fill="#34D399">$ boot --os</text>
  <text x="492" y="212" font-family="${MONO}" font-size="20" fill="#E2E8F0">loading desktop…</text>
  <rect x="492" y="232" width="12" height="22" fill="${a}"/>`,

  chat: (a) => `
  <path d="M 500 130 h 200 a 24 24 0 0 1 24 24 v 90 a 24 24 0 0 1 -24 24 h -130 l -46 38 v -38 h -24 a 24 24 0 0 1 -24 -24 v -90 a 24 24 0 0 1 24 -24 Z"
        fill="#0B0F18" stroke="${a}" stroke-opacity="0.55" stroke-width="2.5"/>
  <text x="530" y="216" font-family="${SANS}" font-size="52" font-weight="700" fill="${a}">「」</text>
  <rect x="530" y="160" width="120" height="9" rx="4.5" fill="${a}" opacity="0.4"/>`,

  pen: (a) => `
  <rect x="490" y="96" width="220" height="250" rx="18" fill="#0B0F18" stroke="${a}" stroke-opacity="0.5" stroke-width="2"/>
  <rect x="516" y="132" width="110" height="10" rx="5" fill="${a}" opacity="0.85"/>
  <rect x="516" y="160" width="168" height="8" rx="4" fill="#334155"/>
  <rect x="516" y="182" width="150" height="8" rx="4" fill="#334155"/>
  <rect x="516" y="204" width="160" height="8" rx="4" fill="#334155"/>
  <path d="M 600 300 l 66 -66 22 22 -66 66 -28 6 Z" fill="${a}"/>
  <path d="M 600 300 l 10 -2 54 -54" stroke="#0B0F18" stroke-width="3" fill="none"/>`,

  research: (a) => `
  <g>
    <path d="M 540 150 l 90 -34 90 34 -90 34 Z" fill="${a}"/>
    <path d="M 576 172 v 44 c 0 16 108 16 108 0 v -44 l -54 20 Z" fill="${a}" opacity="0.65"/>
    <rect x="712" y="196" width="18" height="70" rx="6" fill="${a}" opacity="0.5"/>
    <rect x="736" y="168" width="18" height="98" rx="6" fill="${a}" opacity="0.75"/>
    <rect x="760" y="140" width="18" height="126" rx="6" fill="${a}"/>
  </g>`,

  windowDark: (a) => `
  <rect x="480" y="100" width="250" height="200" rx="18" fill="#0B0F18" stroke="${a}" stroke-opacity="0.5" stroke-width="2"/>
  <rect x="480" y="100" width="250" height="34" rx="18" fill="#1C1917"/>
  <circle cx="502" cy="117" r="5" fill="#FF5F57"/><circle cx="520" cy="117" r="5" fill="#FEBC2E"/><circle cx="538" cy="117" r="5" fill="#28C840"/>
  <rect x="502" y="152" width="90" height="12" rx="6" fill="${a}"/>
  <rect x="502" y="176" width="150" height="8" rx="4" fill="#44403C"/>
  <rect x="502" y="192" width="120" height="8" rx="4" fill="#44403C"/>
  <rect x="502" y="222" width="70" height="26" rx="13" fill="${a}" opacity="0.85"/>
  <circle cx="668" cy="240" r="26" fill="${a}" opacity="0.25"/>`,

  sliders: (a) => `
  <rect x="480" y="110" width="250" height="180" rx="20" fill="#0B0F18" stroke="${a}" stroke-opacity="0.5" stroke-width="2"/>
  <g stroke="#334155" stroke-width="8" stroke-linecap="round">
    <path d="M 506 152 h 198"/><path d="M 506 200 h 198"/><path d="M 506 248 h 198"/>
  </g>
  <circle cx="560" cy="152" r="13" fill="${a}"/>
  <circle cx="636" cy="200" r="13" fill="${a}" opacity="0.8"/>
  <circle cx="600" cy="248" r="13" fill="${a}" opacity="0.6"/>`,

  bolt: (a) => `
  <circle cx="610" cy="200" r="104" fill="${a}" opacity="0.14"/>
  <path d="M 622 92 L 548 216 h 52 l -18 92 84 -128 h -52 Z" fill="${a}"/>`,

  shield: (a) => `
  <path d="M 610 96 l 92 30 v 78 c 0 54 -40 88 -92 104 c -52 -16 -92 -50 -92 -104 v -78 Z"
        fill="#0B0F18" stroke="${a}" stroke-opacity="0.55" stroke-width="3"/>
  <path d="M 570 202 l 30 30 56 -62" stroke="${a}" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  globe: (a) => `
  <circle cx="606" cy="200" r="98" fill="none" stroke="${a}" stroke-width="6" opacity="0.9"/>
  <ellipse cx="606" cy="200" rx="46" ry="98" fill="none" stroke="${a}" stroke-width="5" opacity="0.6"/>
  <path d="M 512 172 h 188 M 512 228 h 188" stroke="${a}" stroke-width="5" opacity="0.6"/>
  <circle cx="676" cy="132" r="14" fill="${a}"/>`,
};

/* ---------- 8 个项目封面 ---------- */

cover({
  file: "cover-my-os.svg", title: "My OS Homepage",
  subtitle: "github.com/kael-odin/my-os-homepage",
  from: "#0F172A", to: "#1E3A8A", accent: "#38BDF8", glyph: G.terminal("#38BDF8"),
});
cover({
  file: "cover-prompts-zh.svg", title: "Prompts Chat 中文站",
  subtitle: "github.com/kael-odin/prompts-chat-zh",
  from: "#1E1B4B", to: "#6D28D9", accent: "#C4B5FD", glyph: G.chat("#C4B5FD"),
});
cover({
  file: "cover-blog.svg", title: "Kael's Blog",
  subtitle: "github.com/kael-odin/kael-odin-blog",
  from: "#042F2E", to: "#0F766E", accent: "#2DD4BF", glyph: G.pen("#2DD4BF"),
});
cover({
  file: "cover-research-skills.svg", title: "Academic Skills 榜单",
  subtitle: "github.com/kael-odin/awesome-academic-research-skills",
  from: "#111827", to: "#3730A3", accent: "#A5B4FC", glyph: G.research("#A5B4FC"),
});
cover({
  file: "cover-devfolio.svg", title: "Devfolio 模板",
  subtitle: "github.com/kael-odin/devfolio",
  from: "#0C0A09", to: "#44403C", accent: "#FBBF24", glyph: G.windowDark("#FBBF24"),
});
cover({
  file: "cover-dsh-cc.svg", title: "DSH Control Center",
  subtitle: "github.com/kael-odin/dsh-control-center",
  from: "#0F172A", to: "#155E75", accent: "#22D3EE", glyph: G.sliders("#22D3EE"),
});
cover({
  file: "cover-profile.svg", title: "Neon GitHub Profile",
  subtitle: "github.com/kael-odin/kael-odin",
  from: "#09090B", to: "#3B0764", accent: "#E879F9", glyph: G.bolt("#E879F9"),
});
cover({
  file: "cover-proxy-list.svg", title: "Free Proxy List",
  subtitle: "github.com/kael-odin/awesome-free-proxy-list",
  from: "#022C22", to: "#065F46", accent: "#34D399", glyph: G.shield("#34D399"),
});

/* ---------- 博客封面（生成到 public/blog/） ---------- */

function blogCover({ file, title, from, to, accent }) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#bg)"/>
  ${dotGrid(800, 400)}
  <circle cx="680" cy="90" r="130" fill="${accent}" opacity="0.12"/>
  <text x="56" y="230" font-family="${SANS}" font-size="46" font-weight="700" fill="#F8FAFC">${title}</text>
  <text x="56" y="286" font-family="${MONO}" font-size="20" fill="${accent}">kael-odin.github.io/blog</text>
  <rect x="56" y="150" width="90" height="7" rx="3.5" fill="${accent}"/>
</svg>`;
  const dir = join(root, "public", "blog");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, file), svg.replace(/\n\s*\n/g, "\n"));
  console.log("wrote public/blog/" + file);
}

blogCover({ file: "post-harness.svg", title: "给本地大模型搭一个 Harness", from: "#0F172A", to: "#312E81", accent: "#818CF8" });
blogCover({ file: "post-mcp.svg", title: "MCP 与 Agent Skills 调研笔记", from: "#1E1B4B", to: "#701A75", accent: "#F0ABFC" });
blogCover({ file: "post-pages.svg", title: "把 Next.js 搬上 GitHub Pages", from: "#042F2E", to: "#134E4A", accent: "#5EEAD4" });

console.log("done");
