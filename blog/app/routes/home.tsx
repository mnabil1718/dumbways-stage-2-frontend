import { PostCard } from "~/components/post-card";
import type { Route } from "./+types/home";
import { posts } from "~/data/posts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <header className="w-full flex flex-col items-center my-10">
        <h1 className="text-4xl mb-1">mnabil.blog</h1>
        <p className="text-muted-foreground">
          Welcome to my micro-blog. Small snippets & documentation of living.
        </p>
      </header>
      <section>
        <h2 className="text-2xl mb-3">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {posts.slice(0, 2).map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
