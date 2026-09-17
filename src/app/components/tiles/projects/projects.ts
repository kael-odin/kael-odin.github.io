/**
 * 项目数据：全部来自 github.com/kael-odin 的真实公开仓库。
 * 新增项目：补一条数据 + 用 assets-src/build-covers.mjs 生成一张封面即可。
 */
export const projectsData = [
  {
    name: "My OS Homepage",
    description:
      "以「操作系统」为灵感的互动个人主页模板：终端开机动画 → 数字桌面。改一个配置文件就能变成你自己的主页。",
    image: "/projects/cover-my-os.svg",
    github: "https://github.com/kael-odin/my-os-homepage",
    view: "https://kael-odin.github.io/my-os-homepage/",
    workStatus: true,
    date: "2026 · 09",
    demo: false,
    personal: true,
    tech: [
      { name: "JavaScript", image: "/tech/js.svg" },
      { name: "Tailwind", image: "/tech/tailwindcss.svg" },
      { name: "GitHub Pages", image: "/tech/github.svg" },
    ],
  },
  {
    name: "Prompts Chat 中文站",
    description:
      "prompts.chat 的非官方简体中文镜像：2205 条提示词全部译成中文，中英对照、全文搜索、一键复制。Astro 静态站 + 增量翻译流水线。",
    image: "/projects/cover-prompts-zh.svg",
    github: "https://github.com/kael-odin/prompts-chat-zh",
    view: "https://kael-odin.github.io/prompts-chat-zh/",
    workStatus: true,
    date: "2026 · 09",
    demo: false,
    personal: true,
    tech: [
      { name: "Astro", image: "/tech/astro-original.svg" },
      { name: "TypeScript", image: "/tech/typescript.svg" },
      { name: "GitHub Actions", image: "/tech/github.svg" },
    ],
  },
  {
    name: "Kael's Blog",
    description:
      "个人博客与笔记：技术、项目、随笔。Next.js + Markdown，记录踩坑与思考。",
    image: "/projects/cover-blog.svg",
    github: "https://github.com/kael-odin/kael-odin-blog",
    view: "https://kael-odin-blog.vercel.app",
    workStatus: true,
    date: "2026 · 03",
    demo: false,
    personal: true,
    tech: [
      { name: "Next.js", image: "/tech/nextjs2.svg" },
      { name: "TypeScript", image: "/tech/typescript.svg" },
      { name: "Markdown", image: "/tech/markdown-original.svg" },
    ],
  },
  {
    name: "Academic Skills 榜单",
    description:
      "面向中文用户的学术论文与科研 Agent Skill 每日排行榜：自动搜索、过滤并排名 GitHub 上的科研 Skill 仓库。",
    image: "/projects/cover-research-skills.svg",
    github: "https://github.com/kael-odin/awesome-academic-research-skills",
    view: "https://kael-odin.github.io/awesome-academic-research-skills/",
    workStatus: true,
    date: "2026 · 06",
    demo: false,
    personal: true,
    tech: [
      { name: "JavaScript", image: "/tech/js.svg" },
      { name: "Python", image: "/tech/python-original.svg" },
      { name: "GitHub Actions", image: "/tech/github.svg" },
    ],
  },
  {
    name: "DSH Control Center",
    description:
      "Cherry 风格的 DeepSeek Harness Web 控制中心，AGPL 开源。",
    image: "/projects/cover-dsh-cc.svg",
    github: "https://github.com/kael-odin/dsh-control-center",
    view: false,
    workStatus: true,
    date: "2026 · 08",
    demo: false,
    personal: true,
    tech: [
      { name: "TypeScript", image: "/tech/typescript.svg" },
      { name: "React", image: "/tech/react-original.svg" },
      { name: "Ollama", image: "/tech/ollama.svg" },
    ],
  },
  {
    name: "Devfolio 模板",
    description:
      "深色开发者作品集模板（React + Vite + Tailwind）：主页、时间线、技能、项目、奖项、统计、联系，改 data/*.json 就能用。",
    image: "/projects/cover-devfolio.svg",
    github: "https://github.com/kael-odin/devfolio",
    view: "https://kael-odin.github.io/devfolio/",
    workStatus: false,
    date: "2026 · 09",
    demo: false,
    personal: true,
    tech: [
      { name: "React", image: "/tech/react-original.svg" },
      { name: "Tailwind", image: "/tech/tailwindcss.svg" },
      { name: "TypeScript", image: "/tech/typescript.svg" },
    ],
  },
  {
    name: "Free Proxy List",
    description:
      "每日更新的免费代理列表（HTTP / HTTPS / SOCKS4 / SOCKS5），GitHub Actions 自动校验可用性，零服务器成本。",
    image: "/projects/cover-proxy-list.svg",
    github: "https://github.com/kael-odin/awesome-free-proxy-list",
    view: "https://kael-odin.github.io/awesome-free-proxy-list/",
    workStatus: true,
    date: "2026 · 09",
    demo: true,
    tech: [
      { name: "Python", image: "/tech/python-original.svg" },
      { name: "GitHub Actions", image: "/tech/github.svg" },
    ],
  },
  {
    name: "Neon GitHub Profile",
    description:
      "赛博霓虹风自部署 GitHub 个人主页：手绘 SVG Hero、终端卡片、自定义统计生成器和 4 个自动化 Action。",
    image: "/projects/cover-profile.svg",
    github: "https://github.com/kael-odin/kael-odin",
    view: false,
    workStatus: false,
    date: "2026 · 09",
    demo: false,
    personal: true,
    tech: [
      { name: "Python", image: "/tech/python-original.svg" },
      { name: "SVG", image: "/tech/css3.svg" },
      { name: "GitHub Actions", image: "/tech/github.svg" },
    ],
  },
];
