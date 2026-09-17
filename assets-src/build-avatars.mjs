/**
 * 从 avatar-base.svg 母版派生 5 个场景头像变体，输出到 public/avatar/。
 * 改形象只改母版，重跑 `node assets-src/build-avatars.mjs` 即可。
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const base = readFileSync(join(root, "assets-src", "avatar-base.svg"), "utf8");

// 取母版 <svg> 标签之后的内容（defs + 全部图形）
const inner = base.slice(base.indexOf(">") + 1).replace("</svg>", "").trim();

function make(name, { bgStops = ["#E0F2FE", "#EDE9FE"], extra = "", scale = 1, dy = 0 } = {}) {
  const stops = bgStops
    .map((c, i) => `<stop offset="${i / (bgStops.length - 1)}" stop-color="${c}"/>`)
    .join("");
  const defs = `
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient>
    </defs>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
  ${defs}
  <g transform="translate(0 ${dy})${scale !== 1 ? ` scale(${scale})` : ""}">
    ${inner}
  </g>
  ${extra}
</svg>`;
  const outDir = join(root, "public", "avatar");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, name), svg.replace(/\n\s*\n/g, "\n"));
  console.log("wrote public/avatar/" + name);
}

/* 1. 挥手（首页 Intro 卡） */
make("avatar-wave.svg", {
  extra: `
  <!-- waving hand -->
  <g transform="translate(198 62) rotate(38)">
    <rect x="-11" y="14" width="32" height="30" rx="13" fill="#6366F1"/>
    <circle cx="3" cy="6" r="15.5" fill="#F8C99B"/>
    <circle cx="-7" cy="-3" r="6" fill="#F8C99B"/>
  </g>
  <!-- motion arcs -->
  <path d="M 198 54 q 8 9 7 21" stroke="#8B5CF6" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M 206 44 q 12 12 10 32" stroke="#8B5CF6" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.5"/>
  `,
});

/* 2. 地图定位（首页 Map 卡） */
make("avatar-pin.svg", {
  bgStops: ["#CFFAFE", "#E0F2FE"],
  extra: `
  <!-- location pin -->
  <g transform="translate(172 42)">
    <path d="M 0 42 C -15 21 -19 12 -19 0 C -19 -12 -10 -21 0 -21 C 10 -21 19 -12 19 0 C 19 12 15 21 0 42 Z"
          fill="#F43F5E" stroke="white" stroke-width="4"/>
    <circle cx="0" cy="-1" r="7" fill="white"/>
  </g>
  `,
});

/* 3. 敲键盘（工具页默认态） */
make("avatar-laptop.svg", {
  bgStops: ["#FEF3C7", "#FECACA"],
  extra: `
  <!-- laptop, drawn after the bust so it covers the lower body -->
  <g>
    <path d="M 62 196 L 178 196 L 192 226 L 48 226 Z" fill="#334155"/>
    <rect x="72" y="148" width="96" height="50" rx="7" fill="#0F172A"/>
    <rect x="78" y="154" width="84" height="38" rx="4" fill="#1E293B"/>
    <!-- code lines on screen -->
    <path d="M 86 163 h 24 M 86 172 h 38 M 86 181 h 18" stroke="#38BDF8" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M 118 163 h 16 M 132 172 h 14 M 112 181 h 22" stroke="#A78BFA" stroke-width="4.5" stroke-linecap="round"/>
    <rect x="52" y="200" width="136" height="8" rx="4" fill="#475569"/>
  </g>
  `,
  scale: 0.94,
  dy: 6,
});

/* 4. AI 星火（工具页悬停态） */
make("avatar-spark.svg", {
  bgStops: ["#EDE9FE", "#FAE8FF"],
  extra: `
  <!-- sparkles -->
  <g fill="#8B5CF6">
    <path d="M 48 62 L 53 76 L 67 81 L 53 86 L 48 100 L 43 86 L 29 81 L 43 76 Z"/>
    <path d="M 196 96 L 200 107 L 211 111 L 200 115 L 196 126 L 192 115 L 181 111 L 192 107 Z" fill="#6366F1"/>
    <path d="M 172 34 L 175 42 L 183 45 L 175 48 L 172 56 L 169 48 L 161 45 L 169 42 Z" fill="#C4B5FD"/>
    <circle cx="60" cy="140" r="5" fill="#A78BFA"/>
    <circle cx="196" cy="150" r="4" fill="#C4B5FD"/>
  </g>
  `,
});

/* 5. 探头打招呼（About 页） */
make("avatar-pop.svg", {
  bgStops: ["#FCE7F3", "#FEF3C7"],
  extra: `
  <!-- foreground panel the character peeks over -->
  <path d="M 24 240 L 24 226 C 24 216 32 210 42 210 L 198 210 C 208 210 216 216 216 226 L 216 240 Z"
        fill="#FFE4E6"/>
  <path d="M 24 240 L 24 232 L 216 232 L 216 240 Z" fill="#FECDD3"/>
  <!-- hands gripping the edge -->
  <g fill="#F8C99B">
    <circle cx="88" cy="212" r="14"/>
    <circle cx="77" cy="205" r="6"/>
    <circle cx="99" cy="205" r="6"/>
    <circle cx="152" cy="212" r="14"/>
    <circle cx="141" cy="205" r="6"/>
    <circle cx="163" cy="205" r="6"/>
  </g>
  `,
  scale: 0.92,
  dy: 6,
});

console.log("done");
