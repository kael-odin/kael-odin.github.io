# 汤勇 Kael Odin · 个人作品集

基于 **Next.js 16（App Router）+ TypeScript** 的 Bento 网格风格个人主页，纯静态导出，部署在 GitHub Pages。

线上地址：<https://kael-odin.github.io/>

---

## 快速开始

```bash
npm install
npm run dev          # 本地开发，http://localhost:3000
npm run build        # 静态导出，产物在 out/
npm run preview      # 本地预览 out/ 目录
```

---

## 改成你自己的

**几乎所有个人相关的信息都集中在一个文件里**：`src/app/site-config.ts`

```ts
export const siteConfig = {
  nameZh: "汤勇",
  nameEn: "Kael Odin",
  title: "汤勇 Kael Odin | 个人作品集",
  email: "445481611@qq.com",
  qq: "445481611",
  wechat: "kael_odin",
  github: "https://github.com/kael-odin",
  location: {
    short: "中国 · 江苏 · 徐州",
    full: "江苏省徐州市泉山区矿大科技园",
    lat: 34.2270694,
    lng: 117.1900111,
    zoom: 16,
  },
};
```

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名、QQ、微信、邮箱、GitHub | `src/app/site-config.ts` |
| 地图定位 | `src/app/site-config.ts` 里的 `location.lat` / `lng` / `zoom` |
| 博客文章 | `src/app/lib/blog-data.ts` 的 `blogPosts` 数组（封面放 `public/blog/`） |
| 项目列表 | `src/app/components/tiles/projects/projects.ts`（封面用 `assets-src/build-covers.mjs` 生成） |
| 工具列表 | `src/app/components/tiles/tools/tools.ts` |
| 工作经历 / 教育背景 | `src/app/components/tiles/about/careers.ts` 与 `AboutContent.tsx` 里的 `education` |
| 首页卡片顺序 / 尺寸 | `src/app/home/page.tsx` 的 `TILE_CONFIG` |
| 头像 | `assets-src/avatar-base.svg` 母版 → 跑 `node assets-src/build-avatars.mjs` |
| Logo / favicon / OG 分享图 | `assets-src/icon.svg` → 跑 `node scripts/generate-brand-assets.mjs` |

> 首页卡片支持拖拽换位，顺序不会被保存，刷新后回到 `TILE_CONFIG` 的默认顺序。
>
> **待办提醒**：`AboutContent.tsx` 里的教育背景（中国矿业大学等）目前是占位示例，记得替换成真实信息。

---

## 部署

推送到 `main` 分支会自动触发 `.github/workflows/deploy-pages.yml`，构建并发布到 GitHub Pages。

也可以在仓库 **Settings → Pages → Build and deployment** 里把 Source 设为 **GitHub Actions**（首次部署时确认一下即可）。

---

## 目录结构

```
src/app/
├── site-config.ts           # 个人配置（改这个就够）
├── layout.tsx               # 全局布局、字体、SEO 元信息
├── globals.css              # 全局样式
├── page.tsx                 # 根路径，重定向到 /home
├── home/                    # 首页 Bento 网格
├── about/                   # 关于
├── tools/                   # 工具
├── projects/                # 项目
├── blog/                    # 博客
├── components/
│   ├── HomeNav.tsx          # 顶部导航
│   ├── ContactModal.tsx     # 联系方式弹窗
│   ├── tiles/home/          # 首页各张卡片
│   ├── tiles/about/         # 关于页内容
│   ├── tiles/projects/      # 项目数据与卡片
│   └── tiles/tools/         # 工具数据与卡片
└── lib/blog-data.ts         # 博客数据源

public/                      # 静态资源（图片、图标、SVG）
```

---

## 技术栈

- **框架**：Next.js 16（App Router）+ TypeScript
- **样式**：Tailwind CSS v4 + Styled-components
- **图标**：React Icons
- **拖拽**：`@dnd-kit`
- **地图**：Google Maps iframe 嵌入（无需 API Key）

---

## 说明

- 本项目是静态站点（`output: "export"`），**没有服务端**。原模板里的联系表单、评价提交、Contentful CMS 都依赖服务端接口，已移除，改为本地静态数据 + 直接展示 QQ / 微信联系方式。
- 模板来源：[Akshayp2002/next-portfolio-new](https://github.com/Akshayp2002/next-portfolio-new)（MIT License），在此基础上深度改造：中文优先、全新品牌视觉（K 徽标 + 手绘 SVG 卡通头像）、CSS 实景卡片（手机 / 浏览器窗口组合）、「光随鼠标」动效（光标追踪光斑 + 边缘辉光 + 级联入场）。
- 技术图标来自 [devicon](https://github.com/devicons/devicon)（MIT）与模板自带资源。
