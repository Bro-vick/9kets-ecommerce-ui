import CartItem from "@/components/cart/CartItem";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <CartItem />
          <CartItem />
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl p-6 h-fit">
          <h2 className="font-semibold mb-4">Order Summary</h2>

          {/* Promo Code */}
          <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">
              Promo Code
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 border rounded-l-lg px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-gray-900 text-white px-4 rounded-r-lg text-sm">
                Apply
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2 text-sm">
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

          <a
            href="/checkout"
            className="block text-center bg-orange-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-orange-600 transition"
          >
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
