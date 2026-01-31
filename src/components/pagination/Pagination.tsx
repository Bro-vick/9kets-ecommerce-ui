export default function Pagination() {
  return (
    <div className="flex justify-center gap-2 mt-10">
      <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
        Previous
      </button>

      {[1, 2, 3].map(n => (
        <button
          key={n}
          className={`px-4 py-2 border rounded-lg ${
            n === 1 ? "bg-orange-500 text-white" : "hover:bg-gray-100"
          }`}
        >
          {n}
        </button>
      ))}

      <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
        Next
      </button>
    </div>
  );
}
