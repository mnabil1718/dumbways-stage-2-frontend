import { PostCard } from "~/components/post-card";
import { posts } from "~/data/posts";

export default function Posts() {
  return (
    <>
      <header className="w-full flex flex-col items-center my-10">
        <h1 className="text-4xl mb-1">Posts</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </>
  );
}
