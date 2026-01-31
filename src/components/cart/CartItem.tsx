"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

type CartItemProps = {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    color?: string;
    storage?: string;
  };
};

export default function CartItem({ item }: CartItemProps) {
  const { increment, decrement, removeItem } = useCartStore();

  return (
    <div className="flex justify-between items-center border-b pb-6">
      {/* Left */}
      <div className="flex gap-4">
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />

        <div>
          <p className="font-semibold text-gray-900">
            {item.name}
          </p>

          {(item.color || item.storage) && (
            <p className="text-sm text-gray-500">
              {item.color && `Color: ${item.color}`}
              {item.color && item.storage && ", "}
              {item.storage && `Storage: ${item.storage}`}
            </p>
          )}

          <p className="font-semibold mt-1">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => decrement(item.id)}
          className="w-8 h-8 border rounded-md"
        >
          −
        </button>

        <span className="w-6 text-center">
          {item.quantity}
        </span>

        <button
          onClick={() => increment(item.id)}
          className="w-8 h-8 border rounded-md"
        >
          +
        </button>

        <button
          onClick={() => removeItem(item.id)}
          className="text-gray-400 hover:text-red-500"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
