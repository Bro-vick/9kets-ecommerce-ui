"use client";

import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <header className="bg-white ">
      <div className="container mx-auto px-20 py-10">

        {/* Top Row */}
        <div className="flex justify-between items-center mb-2">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            9kets
          </Link>

          {/* Top Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:text-orange-500">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-orange-500">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-orange-500">
              Blog
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-orange-500">
            <Search size={20} className="cursor-pointer" />

            {/* Cart Icon with Count */}
            <Link href="/cart" className="relative">
              <ShoppingCart size={20} />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <User size={20} className="cursor-pointer" />
          </div>
        </div>

        {/* Bottom Row – Categories */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600 justify-center pt-2">
          <Link href="/shop" className="hover:text-orange-500">
            All products
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Laptops
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Smartphones
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Headphones
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Cameras
          </Link>
        </nav>
      </div>
    </header>
  );
}
