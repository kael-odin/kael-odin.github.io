/**
 * 博客数据源。
 *
 * 原来这里接的是 Contentful CMS，改成 GitHub Pages 静态站点后，
 * 直接在下面的数组里写文章即可，格式：
 *
 *   {
 *     id: "唯一 id",
 *     createdAt: "2026-01-01",        // 发布时间
 *     posterUrl: "/blog/xxx.svg",      // 封面图，放 public/ 下
 *     headding: "标题",                // 注意原字段名就是 headding
 *     quickLook: "一句话摘要",
 *     description: "详情正文，换行用 \n",
 *     tags: [{ name: "标签", color: "#4B5563" }],
 *     link: "https://原文链接",        // 可留空
 *   }
 *
 * 数组为空时，博客页会显示"暂无文章"的空状态。
 */
export type BlogTag = {
  name?: string;
  color?: string;
};

export type BlogPost = {
  id: string;
  createdAt?: string;
  posterUrl?: string;
  headding?: string;
  quickLook?: string;
  description?: string;
  tags: BlogTag[];
  link?: string;
};

/** 种子文章：基于真实的折腾记录，可在 link 字段挂上博客原文后替换 */
export const blogPosts: BlogPost[] = [
  {
    id: "local-llm-harness",
    createdAt: "2026-09-10",
    posterUrl: "/blog/post-harness.svg",
    headding: "给本地大模型搭一个顺手的 Harness",
    quickLook: "从 Ollama 拉模型到 DeepSeek Harness 跑通，记录一次完整的本地 LLM 工作流搭建。",
    description:
      "最近把本地大模型的工作流完整搭了一遍：\n\n1. Ollama 拉起 DeepSeek / Qwen 系列，配合 2080Ti 22G 改造的显存方案；\n2. 用 DeepSeek Harness 把对话、工具调用和文件上下文串起来；\n3. 再套一层自建的 Control Center 做可视化管理。\n\n踩坑最多的地方是显存不够时的分层加载和超长上下文的截断策略。\n结论：本地模型的意义不只是省钱，而是数据完全在自己手里，实验可以放开手脚。",
    tags: [
      { name: "本地大模型", color: "#6366F1" },
      { name: "Ollama", color: "#0EA5E9" },
    ],
    link: "",
  },
  {
    id: "mcp-skills-research",
    createdAt: "2026-09-14",
    posterUrl: "/blog/post-mcp.svg",
    headding: "MCP 与 Agent Skills 生态调研笔记",
    quickLook: "爬完 4278 条 MCP 目录和主流榜单后，对 Agent 工具生态的一些观察。",
    description:
      "花了一个周末把 MCP（Model Context Protocol）生态摸了一遍：\n\n· 收录了 4,278 条 MCP 服务器的目录数据和各大榜单；\n· 按主题给 Skill 仓库做了分类统计，科研类和浏览器自动化最热；\n· 对比了几种 Agent Harness 的设计取舍（手写循环 vs 基于框架）。\n\n一个直观感受：MCP 正在变成 AI 应用的 USB 接口，谁的 Skill 分发做得好，谁就握住了生态入口。\n完整报告和可重跑的脚本都开源在我的 GitHub。",
    tags: [
      { name: "MCP", color: "#8B5CF6" },
      { name: "Agent", color: "#F59E0B" },
      { name: "调研", color: "#10B981" },
    ],
    link: "",
  },
  {
    id: "nextjs-static-github-pages",
    createdAt: "2026-09-17",
    posterUrl: "/blog/post-pages.svg",
    headding: "把 Next.js 静态站搬上 GitHub Pages",
    quickLook: "output: export + trailingSlash + 无 Jekyll，三步让 Next.js 16 在 Pages 上稳定运行。",
    description:
      "这个作品集就是 Next.js 16 静态导出部署在 GitHub Pages 上的，关键就三步：\n\n1. next.config.ts 里 output: \"export\"，同时关掉图片优化（Pages 没有优化服务）；\n2. trailingSlash: true，生成 about/index.html 目录结构，刷新子页面不 404；\n3. out/ 目录丢一个 .nojekyll，避免 Pages 用 Jekyll 处理下划线开头的静态资源。\n\n另外用 GitHub Actions 全自动构建部署，push 即上线。\n以后谁再说 Next.js 只能部署在 Vercel，可以把这篇文章甩给他。",
    tags: [
      { name: "Next.js", color: "#0EA5E9" },
      { name: "GitHub Pages", color: "#111827" },
      { name: "教程", color: "#F43F5E" },
    ],
    link: "",
  },
];
