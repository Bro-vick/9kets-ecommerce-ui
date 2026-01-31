import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import RatingFilter from "./RatingFilter";
import AvailabilityFilter from "./AvailabilityFilter";

export default function SidebarFilters() {
  return (
    <aside className="bg-white rounded-xl p-6 space-y-8 sticky top-24 h-fit">
      <CategoryFilter />
      <PriceFilter />
      <BrandFilter />
      <RatingFilter />
      <AvailabilityFilter />
    </aside>
  );
}
