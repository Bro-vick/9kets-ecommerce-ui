import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover rounded-lg"
        />

        <h3 className="font-semibold mt-3">{product.title}</h3>
        <p className="text-zinc-500 font-light">${product.price}.00</p>
      </div>
    </Link>
  );
}
