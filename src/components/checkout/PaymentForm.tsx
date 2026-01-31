export default function PaymentForm() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="font-semibold mb-4">Payment Method</h2>

      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" defaultChecked />
          Credit Card
        </label>

        <input placeholder="Card Number" className="input" />
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="MM / YY" className="input" />
          <input placeholder="CVC" className="input" />
        </div>
      </div>
    </div>
  );
}
