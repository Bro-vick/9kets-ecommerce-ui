export default function ShippingForm() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="font-semibold mb-4">Shipping Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="First Name" className="input" />
        <input placeholder="Last Name" className="input" />
        <input placeholder="Address" className="md:col-span-2 input" />
        <input placeholder="City" className="input" />
        <input placeholder="State" className="input" />
        <input placeholder="ZIP Code" className="input" />
        <input placeholder="Email Address" className="md:col-span-2 input" />
      </div>
    </div>
  );
}
