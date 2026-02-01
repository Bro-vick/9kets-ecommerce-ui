"use client";

import Image from "next/image";
import {
  User,
  Heart,
  MapPin,
  LogOut,
  Search,
  Clock
} from "lucide-react";


export default function OrderHistoryPage() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* ================= LEFT SIDEBAR ================= */}
        <div className="bg-white rounded-xl p-6 h-fit">
          <h3 className="font-semibold mb-5">My Account</h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 text-gray-600 cursor-pointer">
              <User size={16} />
              My Profile
            </li>

            <li className="flex items-center gap-3 text-orange-500 font-medium cursor-pointer">
              <Clock size={16} />
              Order History
            </li>

            <li className="flex items-center gap-3 text-gray-600 cursor-pointer">
              <Heart size={16} />
              Wishlist
            </li>

            <li className="flex items-center gap-3 text-gray-600 cursor-pointer">
              <MapPin size={16} />
              Addresses
            </li>

            <li className="flex items-center gap-3 text-gray-600 cursor-pointer">
              <LogOut size={16} />
              Logout
            </li>
          </ul>
        </div>


          {/* ================= MAIN CONTENT ================= */}
          <div className="lg:col-span-3 space-y-6">

            {/* HEADER */}
            <h1 className="text-2xl font-bold">
              Order History
            </h1>

            {/* SEARCH + FILTER */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  placeholder="Search by order number or product"
                  className="w-full border rounded-lg py-2 pl-9 text-sm"
                />
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Filter by:</span>
                <select className="border rounded-lg py-2 px-3">
                  <option>Last 30 days</option>
                  <option>Last 6 months</option>
                  <option>Last year</option>
                </select>
              </div>
            </div>

            {/* ================= ORDER 1 ================= */}
            <div className="bg-white rounded-xl p-6 border">
              <div className="flex justify-between items-center mb-4 border-b">
                <div>
                  <p className="font-semibold">
                    Order #123-4567890
                  </p>
                  <p className="text-sm text-gray-500">
                    Placed on: October 26, 2023
                  </p>
                  <p className="text-sm">
                    Total: <span className="font-bold">$1565.99</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-green-600 rounded-full" />
                    Delivered
                  </span>

                  <button className="text-orange-500 text-sm">
                    View Details
                  </button>
                </div>
              </div>

              {/* ITEMS */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <Image
                      src="/images/products/ultra-slim-laptop-product.png"
                      alt=""
                      width={48}
                      height={48}
                      className="rounded"
                    />
                    <div>
                      <p className="font-medium">
                        Ultra-Slim Laptop
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: 1
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">$1250.00</p>
                    <button className="mt-1 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                      Buy Again
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <Image
                      src="/images/products/wireless-headphones-product.png"
                      alt=""
                      width={48}
                      height={48}
                      className="rounded"
                    />
                    <div>
                      <p className="font-medium">
                        Wireless Headphones
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: 1
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">$199.99</p>
                    <button className="mt-1 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                      Buy Again
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= ORDER 2 ================= */}
            <div className="bg-white rounded-xl p-6 border">
              <div className="flex justify-between items-center mb-4 border-b">
                <div>
                  <p className="font-semibold">
                    Order #123-9876543
                  </p>
                  <p className="text-sm text-gray-500">
                    Placed on: September 15, 2023
                  </p>
                  <p className="text-sm">
                    Total: <span className="font-bold">$89.50</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                     Shipped
                  </span>

                  <button className="text-orange-500 text-sm">
                    Track Order
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <Image
                    src="/images/products/smartwatch-series-8.png"
                    alt=""
                    width={48}
                    height={48}
                    className="rounded"
                  />
                  <div>
                    <p className="font-medium">
                      Smartwatch Series 8
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: 1
                    </p>
                  </div>
                </div>

                <p className="font-bold">$89.50</p>
              </div>
            </div>

            {/* ================= ORDER 3 ================= */}
            <div className="bg-white rounded-xl p-6 border">
              <div className="flex justify-between items-center mb-4 border-b">
                <div>
                  <p className="font-semibold">
                    Order #123-1122334
                  </p>
                  <p className="text-sm text-gray-500">
                    Placed on: August 02, 2023
                  </p>
                  <p className="text-sm">
                    Total: <span className="font-bold">$45.00</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-red-600 rounded-full" />
                    Cancelled
                  </span>

                  <button className="text-orange-500 text-sm">
                    View Details
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <Image
                    src="/images/products/50mm-prime-lens.png"
                    alt=""
                    width={48}
                    height={48}
                    className="rounded"
                  />
                  <div>
                    <p className="font-medium">
                      50mm Prime Lens
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: 1
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold">$45.00</p>
                  <button className="mt-1 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                    Buy Again
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
