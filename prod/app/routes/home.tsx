import { ProductCard } from "~/components/product-card";
import type { Route } from "./+types/home";
import { getProducts } from "~/service/products";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// Ensure this is exported and returns the object correctly
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const data = await getProducts();
  return data;
}

// Consume the data via props
export default function Home({ loaderData }: Route.ComponentProps) {
  const { products, error } = loaderData;

  return (
    <>
      <header className="w-full flex flex-col items-center my-10 text-center">
        <h1 className="text-4xl mb-1">mini.store</h1>
        <p className="text-muted-foreground mb-7">
          Mini product catalog using fakestoreapi.
        </p>
        <a href="/products">
          <Button className="bg-green-700 cursor-pointer">
            Explore catalog
          </Button>
        </a>
      </header>

      <section>
        <h2 className="text-2xl mb-3">Featured</h2>

        {error && <div className="text-red-500">Error: {error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {products?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
