import { getProductById } from "~/service/products";
import type { Route } from "./+types/$id"; // have to define the route first to get rid ot error: not found module
import { Rating } from "~/components/rating";
import { Quantity } from "~/components/qty";
import { Button } from "~/components/ui/button";
import { useCart } from "~/context/cart";
import { useState } from "react";
import { toast } from "sonner";

// Ensure this is exported and returns the object correctly
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const productId = Number(params.id);
  const data = await getProductById(productId);
  return data;
}

export default function Product({ loaderData }: Route.ComponentProps) {
  const { add } = useCart();
  const [qty, setQty] = useState<number>(1);
  const [btnText, setBtnText] = useState<string>("Add to cart");
  const { product } = loaderData;

  if (!product)
    return <p className="text-sm text-muted-foreground">No product found</p>;

  const addToCart = () => {
    const success = add({
      id: Date.now(),
      product,
      qty,
    });

    if (!success) {
      setBtnText("Cannot add to cart");
    } else {
      setBtnText("Added Successfully");
    }

    setTimeout(() => {
      setBtnText("Add to cart");
    }, 2000);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full rounded aspect-video bg-slate-100 overflow-hidden mb-5">
        {product?.image && (
          <img
            src={product.image}
            alt={product.title}
            className="object-contain"
          />
        )}
      </div>
      <header className="mb-5">
        <h1 className="text-3xl font-medium mb-2">{product?.title}</h1>
        <div className="flex w-full align-items justify-between">
          <p className="text-xl text-slate-600">USD {product?.price}</p>
          <Rating rating={product?.rating} />
        </div>
      </header>
      <div className="mb-12 flex items-center gap-2">
        <Quantity value={qty} cb={setQty} />
        <Button className="cursor-pointer" onClick={addToCart}>
          {btnText}
        </Button>
      </div>
      <p className="leading-relaxed text-slate-600">{product?.description}</p>
    </div>
  );
}
