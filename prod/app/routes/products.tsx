import { ProductCard } from "~/components/product-card";
import type { Route } from "./+types/home";
import { getProducts } from "~/service/products";
import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "~/components/ui/input-group";
import { Search } from "lucide-react";
import { useDebounce } from "~/hooks/use-debounce";

export function meta({}: Route.MetaArgs) {
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

  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 300);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value.trim());
  };

  const filtered = products?.filter((p) =>
    p.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <>
      <header className="w-full flex flex-col items-center my-10 text-center">
        <h1 className="text-4xl mb-1">Products Catalog</h1>
      </header>

      <InputGroup className="mb-5">
        <InputGroupInput
          placeholder="Search product name..."
          onChange={searchHandler}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          {filtered?.length} results
        </InputGroupAddon>
      </InputGroup>

      <section>
        {error && <div className="text-red-500">Error: {error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {filtered?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
