"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Lock } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const { items, increment, decrement, removeItem, totalPrice } =
    useCartStore();

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6">
            <div className="flex justify-between mb-6">
              <h2 className="font-semibold">
                Your Items ({items.length})
              </h2>
              <button
                className="text-sm text-red-500"
                onClick={() => items.forEach(i => removeItem(i.id))}
              >
                Remove All
              </button>
            </div>

            <div className="space-y-6">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-6"
                >
                  <div className="flex gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />

                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Color: {item.color}, Storage: {item.storage}
                      </p>
                      <p className="font-semibold mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrement(item.id)}
                      className="w-8 h-8 border rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="w-8 h-8 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-xl p-6 h-fit">
            <h3 className="font-semibold mb-4">Order Summary</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$116.00</span>
              </div>
            </div>

            <div className="flex justify-between font-bold mt-4">
              <span>Total</span>
              <span>${(totalPrice() + 116).toFixed(2)}</span>
            </div>

            <div className="mt-6">
              <p className="font-semibold mb-2">Promo Code</p>
              <div className="flex">
                <input
                  placeholder="Enter promo code"
                  className="flex-1 border rounded-l px-3 py-2 text-sm"
                />
                <button className="bg-gray-200 px-4 rounded-r text-sm">
                  Apply
                </button>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-6 flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-lg font-semibold"
            >
              <Lock size={16} /> Proceed to Checkout
            </Link>

            <Link
              href="/shop"
              className="block text-center text-orange-500 text-sm mt-3"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
