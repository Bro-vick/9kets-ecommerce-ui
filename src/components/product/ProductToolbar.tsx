export default function ProductToolbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <p className="text-sm text-gray-600">
        Showing <span className="font-semibold">1 – 9</span> of{" "}
        <span className="font-semibold">27</span> results
      </p>

      <select className="border rounded-lg px-3 py-2 text-sm">
        <option>Sort by popularity</option>
        <option>Sort by price: low to high</option>
        <option>Sort by price: high to low</option>
      </select>
    </div>
  );
}
