import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router";
import { Cart } from "./cart";

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="bg-white w-full p-5 sticky top-0 z-10 border-b">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/">Home</a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/about">About</a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/products">Products</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              {user ? (
                <Button
                  variant={"outline"}
                  className="cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <a href="/login">
                  <Button variant={"outline"} className="cursor-pointer">
                    Login
                  </Button>
                </a>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Cart />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
