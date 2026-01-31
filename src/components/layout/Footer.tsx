import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-4">Newsletter Signup</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for updates and promotions.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-lg bg-white text-black focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-semibold text-white mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold text-white mb-4">About Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Social Links</h4>
          <div className="flex gap-4">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} 9kets. All Rights Reserved.
      </div>
    </footer>
  );
}
