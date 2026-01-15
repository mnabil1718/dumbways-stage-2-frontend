import { X } from "lucide-react";
import { useCart, type CartItem } from "../context/cart";
import { Quantity } from "./qty";

export function CartItem({ item }: { item: CartItem }) {
  const { remove, updateQty } = useCart();

  const removeItem = () => {
    remove(item.id);
  };

  const qtyCallback = (v: number) => {
    updateQty(item.id, v);
  };

  return (
    <div className="relative flex gap-4 py-5">
      <div className="relative">
        <button
          onClick={removeItem}
          className="absolute bg-white border rounded-full flex justify-center items-center -top-2 -left-2 p-1 cursor-pointer text-muted-foreground hover:text-foreground"
        >
          <X size={20} />
        </button>
        <div className="bg-slate-100 aspect-square w-20 overflow-hidden rounded-sm">
          {item.product.image && (
            <img
              src={item.product.image}
              alt={item.product.title}
              className="object-cover"
            />
          )}
        </div>
      </div>

      <div className="flex-1">
        <span className="text-slate-600 line-clamp-1 mb-2">
          {item.product.title}
        </span>

        <div className="flex flex-col items-end">
          <div className="mb-2">
            <Quantity value={item.qty} cb={qtyCallback} />
          </div>
          <span className="text-sm font-medium">
            ${item.product.price * item.qty} USD
          </span>
        </div>
      </div>
    </div>
  );
}
