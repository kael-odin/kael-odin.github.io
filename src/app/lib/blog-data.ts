/**
 * 博客数据源。
 *
 * 原来这里接的是 Contentful CMS，改成 GitHub Pages 静态站点后，
 * 直接在下面的数组里写文章即可，格式：
 *
 *   {
 *     id: "唯一 id",
 *     createdAt: "2026-01-01",        // 发布时间
 *     posterUrl: "/projects/xxx.webp", // 封面图，放 public/ 下
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

/** 占位数据，之后在这里补自己的文章 */
export const blogPosts: BlogPost[] = [];
