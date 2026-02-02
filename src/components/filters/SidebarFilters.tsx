import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import RatingFilter from "./RatingFilter";
import AvailabilityFilter from "./AvailabilityFilter";

export default function SidebarFilters() {
  return (
    <aside
      className="
        hidden lg:block
        bg-white
        rounded-xl
        p-6
        space-y-8
        sticky
        top-32
        self-start
        max-h-[calc(100vh-8rem)]
        overflow-y-auto
      "
    >
      <CategoryFilter />
      <PriceFilter />
      <BrandFilter />
      <RatingFilter />
      <AvailabilityFilter />
    </aside>
  );
}
