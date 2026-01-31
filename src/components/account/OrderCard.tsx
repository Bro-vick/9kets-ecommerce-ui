import Image from "next/image";

export default function OrderCard({ order }: any) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col sm:flex-row gap-6">
      
      {/* Product Image */}
      <div className="w-24 h-24 relative shrink-0">
        <Image
          src={order.image}
          alt={order.productName}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Order Details */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="font-semibold text-gray-900">
              Order #{order.id}
            </p>
            <p className="text-sm text-gray-500">
              {order.date}
            </p>
          </div>

          {/* Status */}
          <span className="w-fit px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
            {order.status}
          </span>
        </div>

        {/* Product Info */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            {order.productName}
          </p>
          <p className="text-sm font-semibold mt-1">
            ${order.price}
          </p>
        </div>

        {/* Action */}
        <button className="mt-4 text-sm font-medium text-orange-500 hover:underline">
          Buy again
        </button>
      </div>
    </div>
  );
}
