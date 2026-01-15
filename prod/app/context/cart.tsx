import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "~/service/products";

export type CartItem = {
  id: number;
  product: Product;
  qty: number;
};

type CartContextPayload = {
  cart: CartItem[];
  getTotal: () => number;
  add: (item: CartItem) => void;
  remove: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
};

const STORAGE_KEY = "cart:product";

export const CartContext = createContext<CartContextPayload | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        setCart(JSON.parse(data));
      }
    } catch (err) {
      console.error("Failed to parse cart from localStorage", err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const add = (item: CartItem) => {
    setCart((prev) => {
      const existed = prev.find((c) => c.product.id === item.product.id);

      if (existed) {
        console.warn("Item already exists in cart");
        return prev;
      }

      return [...prev, item];
    });
  };

  const remove = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, curr) => sum + curr.product.price * curr.qty, 0);
  };

  const updateQty = (id: number, qty: number) => {
    setCart((prev) => prev.map((c) => (c.id === id ? { ...c, qty } : c)));
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
