import { posts } from "~/data/posts";
import type { Route } from "./+types/$id";
import { PostCard } from "~/components/post-card";
import { Button } from "~/components/ui/button";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = Number(params.id);

  const post = posts.filter((p) => p.id === postId)[0];
  return { ...post };
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const post = loaderData;
  return (
    <>
      <a href="/posts">
        <Button type="button">Go back</Button>
      </a>
      <header className="w-full mt-10 mb-3">
        <h1 className="text-4xl mb-1">{post.title}</h1>
        <p className="text-muted-foreground">By {post.author}</p>
      </header>
      <div className="w-full aspect-video bg-slate-300 rounded-sm overflow-hidden mb-3">
        {post.imageUrl && (
          <img
            src={`../${post.imageUrl}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div>
        <p className="leading-relaxed text-slate-600">{post.content}</p>
      </div>
    </>
  );
}
