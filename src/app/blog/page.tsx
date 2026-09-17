import BlogInfiniteList from "@/components/blog/BlogInfiniteList";

export const metadata = {
  title: "博客 | 汤勇 Kael Odin",
  description: "记录思考、实验与发现。",
};

export default function BlogPage() {
  const itemsPerPage = 6;

  return (
    <main className="min-h-screen py-5 flex justify-center">
      <div className="max-w-[1200px] w-full px-4">
        <BlogInfiniteList itemsPerPage={itemsPerPage} />
      </div>
    </main>
  );
}
