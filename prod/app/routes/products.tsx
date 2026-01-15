import { ProductCard } from "~/components/product-card";
import type { Route } from "./+types/home";
import { getProducts } from "~/service/products";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Products Page" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

// Ensure this is exported and returns the object correctly
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const data = await getProducts();
    return data;
}

// Consume the data via props
export default function Products({ loaderData }: Route.ComponentProps) {
    const { products, error } = loaderData;

    return (
        <>
            <header>

            </header>
            <header className="w-full flex flex-col items-center my-10 text-center">
                <h1 className="text-4xl mb-1">Products Catalog</h1>
            </header>

            <section>
                {error && <div className="text-red-500">Error: {error}</div>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>
    );
}
