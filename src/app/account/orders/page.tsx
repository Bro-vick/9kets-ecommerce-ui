import AccountSidebar from "@/components/account/AccountsSidebar";
import OrderCard from "@/components/account/OrderCard";
import { orders } from "@/data/orders";

export default function OrderHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <AccountSidebar />

        <div className="lg:col-span-3 space-y-6">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
