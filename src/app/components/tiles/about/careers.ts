export type CareerProject = {
  name: string;
  image: string;
  link?: string;
};

export type CareerSkill = {
  name: string;
  icon: string;
};

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  badge: string;
  current: boolean;
  logo: string;
  overview: string;
  myRole: string;
  projects: CareerProject[];
  skills: CareerSkill[];
};

/**
 * 职业经历数据。
 * TODO: 这里目前展示的是开源/独立开发经历，如有正式工作经历，直接替换数组内容即可。
 */
export const careersData: CareerEntry[] = [
  {
    id: "kael-lab",
    role: "独立开发者",
    company: "Kael Odin Lab · 个人开源工作室",
    period: "2025 年 - 至今",
    badge: "进行中",
    current: true,
    logo: "/company/kael-lab.svg",
    overview:
      "利用业余时间持续构建和维护开源项目：从 OS 风格互动主页模板、2200+ 提示词中文镜像站，到学术论文科研 Skill 每日排行榜。项目全部托管在 GitHub，站点部署在 GitHub Pages / Vercel。",
    myRole:
      "从需求、设计、开发到部署全流程独立完成。擅长把「一个想法」快速变成「一个能用的网站」：自动化流水线（GitHub Actions）定时抓取与构建、静态站点零成本部署、README 与文档打磨，让每个项目开箱即用。",
    projects: [
      {
        name: "My OS Homepage",
        image: "/projects/cover-my-os.svg",
        link: "https://kael-odin.github.io/my-os-homepage/",
      },
      {
        name: "Prompts Chat 中文站",
        image: "/projects/cover-prompts-zh.svg",
        link: "https://kael-odin.github.io/prompts-chat-zh/",
      },
      {
        name: "Academic Skills 榜单",
        image: "/projects/cover-research-skills.svg",
        link: "https://kael-odin.github.io/awesome-academic-research-skills/",
      },
    ],
    skills: [
      { name: "TypeScript", icon: "/tech/typescript.svg" },
      { name: "Python", icon: "/tech/python-original.svg" },
      { name: "Next.js", icon: "/tech/nextjs2.svg" },
      { name: "Astro", icon: "/tech/astro-original.svg" },
      { name: "Tailwind", icon: "/tech/tailwindcss.svg" },
      { name: "GitHub Actions", icon: "/tech/github.svg" },
      { name: "Ollama", icon: "/tech/ollama.svg" },
      { name: "Docker", icon: "/tech/docker.svg" },
    ],
  },
  {
    id: "opensource",
    role: "开源贡献者",
    company: "GitHub · kael-odin",
    period: "2024 年 - 至今",
    badge: "持续输出",
    current: false,
    logo: "/company/kael-github.svg",
    overview:
      "在 GitHub 上持续输出：Agent Harness 与 MCP 生态调研、本地大模型部署实践（DeepSeek Harness 等）、代理池维护与提示词工程。同时以博客记录思考，沉淀可复用的模板与工具。",
    myRole:
      "以「先跑通、再讲清楚」的方式做开源：给项目补全中文文档与部署脚本，把踩坑过程写成教程博客；维护的 awesome-free-proxy-list 每日自动更新并校验可用性。",
    projects: [
      {
        name: "Kael's Blog",
        image: "/projects/cover-blog.svg",
        link: "https://kael-odin-blog.vercel.app",
      },
      {
        name: "Free Proxy List",
        image: "/projects/cover-proxy-list.svg",
        link: "https://kael-odin.github.io/awesome-free-proxy-list/",
      },
      {
        name: "Neon GitHub Profile",
        image: "/projects/cover-profile.svg",
        link: "https://github.com/kael-odin/kael-odin",
      },
    ],
    skills: [
      { name: "Git", icon: "/tech/git-original.svg" },
      { name: "Linux", icon: "/tech/linux.svg" },
      { name: "Markdown", icon: "/tech/markdown-original.svg" },
      { name: "OpenAI", icon: "/tech/openai.svg" },
      { name: "Redis", icon: "/tech/redis.svg" },
      { name: "Nginx", icon: "/tech/nginx-original.svg" },
    ],
  },
];
