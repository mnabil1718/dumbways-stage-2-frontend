import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/dashboard", "routes/dashboard.tsx"),
    route("/login", "routes/login.tsx"),
    route("/products", "routes/products.tsx"),
    route("/products/:id", "routes/products/$id.tsx"),
] satisfies RouteConfig;
