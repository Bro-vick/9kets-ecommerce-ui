import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        
        {/* Top Row */}
        <div className="flex justify-between items-center mb-2">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            9kets
          </Link>

          {/* Top Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:text-orange-500">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-orange-500">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-orange-500">
              Blog
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-orange-500">
            <Search size={20} className="cursor-pointer hover:opacity-80" />
            <Link href="/cart">
              <ShoppingCart
                size={20}
                className="cursor-pointer hover:opacity-80"
              />
            </Link>
            <User size={20} className="cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Bottom Row – Product Categories */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600 justify-center pt-2">
          <Link href="/shop" className="hover:text-orange-500">
            All products
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Laptops
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Smartphones
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Headphones
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Cameras
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Smartwatches
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Accessories
          </Link>
          <Link href="#" className="hover:text-orange-500">
            Drones
          </Link>
        </nav>
      </div>
    </header>
  );
}
