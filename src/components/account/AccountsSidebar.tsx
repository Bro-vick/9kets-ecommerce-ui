export default function AccountSidebar() {
  return (
    <aside className="bg-white rounded-xl p-6 space-y-4 h-fit">
      <h3 className="font-semibold">My Account</h3>
      <ul className="space-y-2 text-sm">
        <li className="text-orange-500">Order History</li>
        <li>Wishlist</li>
        <li>Addresses</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
}
