"use client";

import Image from "next/image";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="py-20 text-center text-gray-500">
        Product not found
      </div>
    );
  }

  /* ================= STATE ================= */
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("black");
  const [storage, setStorage] = useState("256GB");

  // 👇 NEW: active image for thumbnails
  const [activeImage, setActiveImage] = useState(
    product.images?.[0] || product.image
  );

  const colors = [
    { value: "black", class: "bg-black" },
    { value: "light-gray", class: "bg-gray-300" },
    { value: "blue", class: "bg-blue-600" },
  ];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: activeImage,
      quantity,
      color,
      storage,
    });
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 space-y-10">

        {/* ================= PRODUCT TOP ================= */}
        <div className="bg-white rounded-xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ================= IMAGES ================= */}
          <div className="space-y-4 px-8">
            {/* Main image */}
            <div className="relative">
              <Image
                src={activeImage}
                alt={product.title}
                width={620}
                height={420}
                className="rounded-lg object-cover"
              />

              {/* Wishlist */}
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                <Heart size={18} />
              </button>
            </div>

            {/* Thumbnails */}
            {product.images && (
              <div className="flex gap-3">
                {product.images.slice(0, 3).map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`border rounded-lg p-1 ${
                      activeImage === img
                        ? "border-orange-500"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      width={80}
                      height={60}
                      className="rounded-md object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= DETAILS ================= */}
          <div>
            <h1 className="text-2xl font-bold mb-2">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-orange-500 text-orange-500"
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">
                (123 reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-semibold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-400 line-through">
                $1400.00
              </span>
            </div>

            {/* Color */}
            <div className="mb-4">
              <p className="font-medium mb-2">Color</p>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setColor(c.value)}
                    className={`w-8 h-8 rounded-full ${c.class} ring-2 ring-offset-2 ${
                      color === c.value
                        ? "ring-orange-500"
                        : "ring-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Storage */}
            <div className="mb-4">
              <p className="font-medium mb-2">Storage</p>
              <div className="flex gap-3">
                {["256GB", "512GB", "1TB"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStorage(s)}
                    className={`px-4 py-2 border rounded-lg text-sm ${
                      storage === s
                        ? "border-orange-500 text-orange-500"
                        : "border-gray-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2"
                >
                  −
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>

            {/* Shipping */}
            <p className="text-sm text-gray-600">
              Free shipping on orders over $50
            </p>
            <p className="text-sm text-gray-600">
              Available for{" "}
              <span className="text-orange-500">in-store pickup</span>
            </p>
          </div>
        </div>

        {/* ================= CUSTOMER REVIEWS ================= */}
        <div className="bg-white rounded-xl p-6 w-1/2">
          <h2 className="font-semibold mb-2">Customer Reviews</h2>

          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-orange-500 text-orange-500"
              />
            ))}
            <span className="text-sm text-gray-500">
              4.5 out of 5
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Based on 123 reviews
          </p>

          {/* Review 1 */}
          <div className="border-t pt-4 mb-4">
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <p className="font-medium">Amazing Laptop!</p>
            <p className="text-sm text-gray-600">
              This is by far the best laptop I’ve ever owned. Super fast,
              lightweight, and the battery life is incredible.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              John D. on March 15, 2024
            </p>
          </div>

          {/* Review 2 */}
          <div className="border-t pt-4">
            <div className="flex gap-1 mb-1">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <p className="font-medium">Great value for the price</p>
            <p className="text-sm text-gray-600">
              Excellent performance for the price.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Jane S. on March 12, 2024
            </p>
          </div>

          <button className="mt-6 text-orange-500 text-sm font-medium block mx-auto">
            Show all reviews
          </button>
        </div>
      </div>
    </div>
  );
}
