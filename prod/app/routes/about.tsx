import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return (
    <>
      <header className="w-full my-10">
        <h1 className="text-4xl mb-3">about</h1>
        <p className="text-muted-foreground leading-relaxed">
          mini.store is a mini e-commerce product catalog page for learning
          purposes. It uses react-router client side render for single page
          application development. Features covered: private route, context
          auth, mock API fetch.
        </p>
      </header>
    </>
  );
}
