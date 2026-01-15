import { ShoppingCart } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { useCart } from "../context/cart";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { CartItem } from "./cart-item";

export function Cart() {
  const { cart, getTotal } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          {cart.length > 0 && (
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -right-1 -top-2"
              variant="destructive"
            >
              {cart.length}
            </Badge>
          )}
          <Button className="cursor-pointer">
            <ShoppingCart />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent className="min-w-[30vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Make changes to your cart items here. Click checkout when
            you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 flex flex-col divide-y px-4">
          {cart.length === 0 && (
            <div className="flex-1 flex flex-col justify-center items-center">
              <p className="text-sm text-muted-foreground">
                Add product to your cart first
              </p>
            </div>
          )}
          {cart.map((c) => {
            return <CartItem key={c.id} item={c} />;
          })}
        </div>
        <SheetFooter>
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span>$ {getTotal()} USD</span>
          </div>
          <Button type="submit">Checkout</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
