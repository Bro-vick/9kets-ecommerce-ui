import { products } from "@/data/products";

export default function ProductDetails({ params }: any) {
  const product = products.find(p => p.id === params.id);

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <img
        src={product?.image}
        alt={product?.title}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-3xl font-bold">{product?.title}</h1>
        <p className="text-orange-500 text-2xl font-semibold mt-2">
          ${product?.price}
        </p>

        <p className="mt-4 text-gray-600">
          Ultra-slim laptop with powerful performance and modern design.
        </p>

        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
