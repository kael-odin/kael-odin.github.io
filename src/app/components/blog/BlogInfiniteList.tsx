"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BlogGrid from "@/components/blog/BlogGrid";
import { blogPosts, type BlogPost } from "@/lib/blog-data";

type Props = {
  itemsPerPage: number;
};

/**
 * 静态站点版本：文章来自 @/lib/blog-data 里的本地数组，
 * 不再请求 /api/blogs；滚到底部时从本地数组继续取下一页。
 */
export default function BlogInfiniteList({ itemsPerPage }: Props) {
  const [items, setItems] = useState<BlogPost[]>(() =>
    blogPosts.slice(0, itemsPerPage)
  );
  const [page, setPage] = useState(1);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const total = blogPosts.length;
  const hasMore = useMemo(() => items.length < total, [items.length, total]);

  const loadMore = useCallback(() => {
    if (!hasMore) return;

    const nextPage = page + 1;
    setItems(blogPosts.slice(0, nextPage * itemsPerPage));
    setPage(nextPage);
  }, [hasMore, page, itemsPerPage]);

  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "180px 0px" }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <>
      <BlogGrid items={items} />

      {!hasMore && items.length > 0 ? (
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          已经到底啦。
        </div>
      ) : null}

      <div ref={sentinelRef} className="h-8 w-full" />
    </>
  );
}
