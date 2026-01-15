import { createContext, useContext, useState } from "react";
import type { Product } from "~/service/products";

export type CartItem = {
  id: number;
  product: Product;
  qty: number;
};

type CartContextPayload = {
  cart: CartItem[];
  getTotal: () => void;
  add: (item: CartItem) => void;
  remove: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
};

export const CartContext = createContext<CartContextPayload | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const add = (item: CartItem) => {
    const existed = cart.find((c) => c.product.id === item.product.id);

    if (existed) throw new Error("item already exists");

    setCart((prev) => [...prev, item]);
  };

  const remove = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, curr) => sum + curr.product.price, 0);
  };

  const updateQty = (id: number, qty: number) => {
    const item = cart.find((c) => c.id === id);
    if (!item) throw new Error("no cart item found");

    const updated = cart.map((c) => (c.id === id ? { ...c, qty } : c));

    setCart(updated);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        add,
        getTotal,
        remove,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("no cart context found");
  return ctx;
}
