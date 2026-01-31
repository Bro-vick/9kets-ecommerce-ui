export default function CategoryFilter() {
  const categories = [
    "All Products",
    "Laptops",
    "Smartphones",
    "Headphones",
    "Cameras",
  ];

  return (
    <div>
      <h4 className="font-semibold mb-4">Categories</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {categories.map(cat => (
          <li key={cat} className="hover:text-orange-500 cursor-pointer">
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
