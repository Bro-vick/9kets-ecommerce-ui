import HeroBanner from "@/components/hero/HeroBanner";
import SidebarFilters from "@/components/filters/SidebarFilters";
import ProductGrid from "@/components/product/ProductGrid";
import ProductToolbar from "@/components/product/ProductToolbar";
import Pagination from "@/components/pagination/Pagination";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-10">

      <HeroBanner />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

        <SidebarFilters />

        <div className="lg:col-span-3">
          <ProductToolbar />
          <ProductGrid products={products} />
          <Pagination />
        </div>

      </div>
    </div>
  );
}
