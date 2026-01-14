import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Post } from "~/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="w-full">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-300">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <p className="text-sm text-muted-foreground">By {post.author}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="line-clamp-3">{post.content}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <a href={`/posts/${post.id}`} className="w-full">
          <Button type="button" className="w-full">
            View
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
