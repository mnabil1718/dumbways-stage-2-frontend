import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/posts", "routes/posts.tsx"),
    route("/posts/:id", "routes/posts/$id.tsx"),
] satisfies RouteConfig;
