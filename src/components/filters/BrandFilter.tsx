const brands = ["Brand A", "Brand B", "Brand C"];

export default function BrandFilter() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Brand</h4>
      <div className="space-y-2 text-sm">
        {brands.map(brand => (
          <label key={brand} className="flex items-center gap-2">
            <input type="checkbox" />
            {brand}
          </label>
        ))}
      </div>
    </div>
  );
}
