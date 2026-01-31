import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-55 sm:h-70 md:h-90 lg:h-105 rounded-xl overflow-hidden mb-10">
      
      {/* Background Image */}
      <Image
        src="/images/banner/hero-banner.png"
        alt="Tech Deals of the Week"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Tech Deals of the Week
        </h1>

        <p className="mt-3 max-w-xl text-sm sm:text-base md:text-lg text-gray-200">
          Discover the latest gadgets and save big.
        </p>

        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-orange-600 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}

