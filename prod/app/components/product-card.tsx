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
import type { Product } from "~/service/products";
import { Rating } from "./rating";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-300">
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        )}
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{product.title}</CardTitle>
        <CardDescription className="text-lg">
          USD {product.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Rating rating={product.rating} />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <a href={`/products/${product.id}`} className="w-full">
          <Button type="button" className="w-full bg-green-700 cursor-pointer">
            Shop Now
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
