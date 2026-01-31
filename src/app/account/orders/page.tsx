"use client";

import Image from "next/image";

export default function OrderHistoryPage() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="bg-white rounded-xl p-6 h-fit">
          <h3 className="font-semibold mb-4">My Account</h3>
          <ul className="space-y-3 text-sm">
            <li>My Profile</li>
            <li className="text-orange-500 font-medium">
              Order History
            </li>
            <li>Wishlist</li>
            <li>Addresses</li>
            <li>Logout</li>
          </ul>
        </aside>

        <main className="lg:col-span-3">
          <h1 className="text-2xl font-bold mb-6">
            Order History
          </h1>

          <div className="bg-white rounded-xl p-6 mb-6">
            <div className="flex gap-4">
              <input
                className="flex-1 border px-4 py-2 rounded"
                placeholder="Search by order number or product"
              />
              <select className="border px-3 rounded">
                <option>Last 30 days</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6">
            <p className="font-semibold mb-2">
              Order #123-4567890
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <Image
                  src="/images/products/ultra-slim-laptop.png"
                  alt=""
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div>
                  <p>Ultra-Slim Laptop</p>
                  <p className="text-sm text-gray-500">
                    Qty: 1
                  </p>
                </div>
              </div>

              <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm">
                Buy Again
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
