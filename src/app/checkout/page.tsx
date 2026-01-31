"use client";

import Image from "next/image";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* SHIPPING INFO */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="font-semibold mb-4">
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm mb-1 block">
                    First Name
                  </label>
                  <input className="input border rounded-lg p-2 w-full" />
                </div>

                <div>
                  <label className="text-sm mb-1 block">
                    Last Name
                  </label>
                  <input className="input border rounded-lg p-2 w-full"  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm mb-1 block">
                    Address
                  </label>
                  <input className="input border rounded-lg p-2 w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-30 w-max">
                  <div>
                    <label className="text-sm mb-1 block">City</label>
                    <input className="input w-full border rounded-lg p-2" />
                  </div>

                  <div>
                    <label className="text-sm mb-1 block">State</label>
                    <input className="input w-full border rounded-lg p-2" />
                  </div>

                  <div>
                    <label className="text-sm mb-1 block">ZIP Code</label>
                    <input className="input w-full border rounded-lg p-2" />
                  </div>
                </div>


                <div className="md:col-span-2">
                  <label className="text-sm mb-1 block">
                    Email Address
                  </label>
                  <input className="input border rounded-lg p-2 w-full" />
                </div>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="font-semibold mb-4">
                Payment Method
              </h2>

              {/* Credit Card */}
              <div className="border rounded-lg p-4 mb-4">
                <label className="flex items-start gap-3">
                  <input type="radio" checked readOnly className="mt-1" />
                  <div>
                    <p className="font-medium">Credit Card</p>
                    <p className="text-sm text-gray-500">
                      Pay with your credit or debit card.
                    </p>
                  </div>
                </label>
              </div>

              {/* PayPal */}
              <div className="border rounded-lg p-4 mb-6">
                <label className="flex items-start gap-3">
                  <input type="radio" className="mt-1" />
                  <div>
                    <p className="font-medium">PayPal</p>
                    <p className="text-sm text-gray-500">
                      Pay securely with your PayPal account.
                    </p>
                  </div>
                </label>
              </div>

              {/* CARD DETAILS */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm mb-1 block">
                    Card Number
                  </label>
                  <input
                    className="input border rounded-lg p-2"
                    value="•••• •••• •••• ••••"
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm mb-1 block">
                      Expiry Date
                    </label>
                    <input
                      className="input border rounded-lg p-2"
                      value="MM / YY"
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="text-sm mb-1 block">
                      CVC
                    </label>
                    <input
                      className="input border rounded-lg p-2"
                      value="•••"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – ORDER SUMMARY */}
          <div className="bg-white rounded-xl p-6 h-fit">
            <h3 className="font-semibold mb-4">
              Order Summary
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Image
                    src="/images/products/ultra-slim-laptop-product.png"
                    alt=""
                    width={48}
                    height={48}
                    className="rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Ultra-Slim Laptop
                    </p>
                    <p className="text-xs text-gray-500">
                      1 × $1250.00
                    </p>
                  </div>
                </div>
                <p>$1250.00</p>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Image
                    src="/images/products/wireless-headphones-product.png"
                    alt=""
                    width={48}
                    height={48}
                    className="rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Wireless Headphones
                    </p>
                    <p className="text-xs text-gray-500">
                      1 × $199.99
                    </p>
                  </div>
                </div>
                <p>$199.99</p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$1449.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$116.00</span>
              </div>
            </div>

            <div className="flex justify-between font-bold mt-4">
              <span>Total</span>
              <span>$1565.99</span>
            </div>

            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-lg font-semibold">
              <Lock size={16} />
              Pay Now
            </button>

            <Link
              href="/cart"
              className="block text-center text-orange-500 text-sm mt-3"
            >
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
