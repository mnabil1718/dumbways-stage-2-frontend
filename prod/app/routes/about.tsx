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
          This site is a micro-blog, my small documentation (notes) about
          life-hacks, and self-improvement I learnt along the way as a software
          engineer and hopefully a better person in general. The goal is to
          write any lesson I got in life and document it for public viewers, so
          people can probably learn from it about a thing or two.
        </p>
      </header>
    </>
  );
}
