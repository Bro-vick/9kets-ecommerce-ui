export default function OrderSummary() {
  return (
    <div className="bg-white rounded-xl p-6 h-fit">
      <h3 className="font-semibold mb-4">Order Summary</h3>

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

      <button className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6">
        Pay Now
      </button>
    </div>
  );
}
