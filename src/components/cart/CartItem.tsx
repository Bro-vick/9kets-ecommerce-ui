import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CartItem() {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col sm:flex-row gap-6">
      
      {/* Product Image */}
      <div className="relative w-24 h-24 shrink-0">
        <Image
          src="/images/products/ultra-slim-laptop-product.png"
          alt="Ultra-Slim Laptop"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">
          Ultra-Slim Laptop
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          High-performance laptop for professionals
        </p>

        {/* Price + Controls */}
        <div className="flex items-center justify-between mt-4">
          <p className="font-semibold">$1250.00</p>

          {/* Quantity + Delete */}
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 border rounded-lg hover:bg-gray-100">
              −
            </button>

            <span className="w-6 text-center">1</span>

            <button className="w-8 h-8 border rounded-lg hover:bg-gray-100">
              +
            </button>

            {/* Delete Icon */}
            <button
              className="ml-2 text-gray-400 hover:text-red-500 transition"
              aria-label="Remove item"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
