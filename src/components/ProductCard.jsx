function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h2 className="font-semibold mt-3 text-lg line-clamp-1">
        {product.title}
      </h2>

      <p className="text-gray-500 text-sm line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <p className="text-blue-600 font-bold">₹ {product.price}</p>
        <p className="text-yellow-500">⭐ {product.rating}</p>
      </div>
    </div>
  );
}

export default ProductCard;
