function ProductCard({ image, title, price }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-4xl font-extrabold text-green-600 mt-4">
          {price}
        </p>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition">
          View Product
        </button>

      </div>
    </div>
  );
}