import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentForm from "@/components/checkout/PaymentForm";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <ShippingForm />
          <PaymentForm />
        </div>

        <OrderSummary />
      </div>
    </div>
  );
}
