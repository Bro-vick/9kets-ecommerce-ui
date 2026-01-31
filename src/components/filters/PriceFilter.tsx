export default function PriceFilter() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Price Range</h4>
      <div className="flex items-center gap-3">
        <span className="text-sm">$0</span>
        <input type="range" min="0" max="500" className="w-full range-orange"/>
        <span className="text-sm">$500</span>
      </div>
    </div>
  );
}
