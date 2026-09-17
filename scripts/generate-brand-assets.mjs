/**
 * 生成品牌二进制资产：
 *   - src/app/favicon.ico        （16/32/48/64，PNG-in-ICO）
 *   - src/app/apple-icon.png     （180×180）
 *   - src/app/icon.svg           （矢量 favicon，现代浏览器优先用）
 *   - src/app/opengraph-image.png（1200×630 分享图）
 * 重跑：node scripts/generate-brand-assets.mjs
 */
import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const iconSvg = readFileSync(join(root, "assets-src", "icon.svg"), "utf8");

// 矢量 favicon 直接放进 app 目录，Next 会自动挂 <link rel="icon">
copyFileSync(join(root, "assets-src", "icon.svg"), join(root, "src", "app", "icon.svg"));

async function renderPng(size) {
  return sharp(Buffer.from(iconSvg)).resize(size, size).png().toBuffer();
}

/* ---------- favicon.ico：手写 ICO 容器，内嵌 PNG ---------- */
async function buildIco() {
  const sizes = [16, 32, 48, 64];
  const pngs = await Promise.all(sizes.map(renderPng));

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(sizes.length, 4); // image count

  const dir = Buffer.alloc(16 * sizes.length);
  let offset = 6 + dir.length;
  pngs.forEach((png, i) => {
    const s = sizes[i];
    const b = i * 16; // 目录内每个条目 16 字节
    dir.writeUInt8(s >= 256 ? 0 : s, b + 0); // width
    dir.writeUInt8(s >= 256 ? 0 : s, b + 1); // height
    dir.writeUInt8(0, b + 2); // palette
    dir.writeUInt8(0, b + 3); // reserved
    dir.writeUInt16LE(1, b + 4); // color planes
    dir.writeUInt16LE(32, b + 6); // bits per pixel
    dir.writeUInt32LE(png.length, b + 8); // data size
    dir.writeUInt32LE(offset, b + 12); // data offset
    offset += png.length;
  });

  writeFileSync(join(root, "src", "app", "favicon.ico"), Buffer.concat([header, dir, ...pngs]));
  console.log("wrote src/app/favicon.ico");
}

/* ---------- apple-icon.png ---------- */
async function buildAppleIcon() {
  await sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile(join(root, "src", "app", "apple-icon.png"));
  console.log("wrote src/app/apple-icon.png");
}

/* ---------- OG 分享图 1200×630 ---------- */
async function buildOg() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1220"/>
      <stop offset="1" stop-color="#1E1B4B"/>
    </linearGradient>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22D3EE"/>
      <stop offset="0.5" stop-color="#3B82F6"/>
      <stop offset="1" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1030" cy="90" r="220" fill="#3B82F6" opacity="0.12"/>
  <circle cx="1120" cy="560" r="150" fill="#8B5CF6" opacity="0.12"/>
  <circle cx="90" cy="580" r="120" fill="#22D3EE" opacity="0.08"/>
  <g transform="translate(92 104) scale(2.8)">
    <rect width="64" height="64" rx="15" fill="#0B0F18"/>
    <rect x="16" y="13" width="9.5" height="38" rx="4.75" fill="url(#g)"/>
    <path d="M24 33.5L43.5 15" stroke="url(#g)" stroke-width="9.5"/>
    <path d="M24 33L43 49.5" stroke="url(#g)" stroke-width="9.5"/>
    <circle cx="52.5" cy="49" r="3.2" fill="#22D3EE"/>
  </g>
  <text x="92" y="392" font-family="'Segoe UI', system-ui, Arial, sans-serif" font-size="72" font-weight="800" fill="#F8FAFC">Kael Odin</text>
  <text x="92" y="452" font-family="'Segoe UI', system-ui, Arial, sans-serif" font-size="34" font-weight="600" fill="#94A3B8">汤勇 · 软件开发者 / Web &amp; AI 工具</text>
  <text x="92" y="540" font-family="Consolas, monospace" font-size="24" fill="#38BDF8">kael-odin.github.io</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(join(root, "src", "app", "opengraph-image.png"));
  console.log("wrote src/app/opengraph-image.png");
}

await buildIco();
await buildAppleIcon();
await buildOg();
console.log("done");
