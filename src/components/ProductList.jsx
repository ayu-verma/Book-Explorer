import ProductCard from "./ProductCard";
function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
      {products.map((book, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
        >
          <div className="overflow-hidden">
            <img
              loading="lazy"
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : "https://via.placeholder.com/200x300"
              }
              alt={book.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="p-3">
            <h2 className="text-sm font-semibold line-clamp-2">{book.title}</h2>

            <p className="text-gray-500 text-xs mt-1">
              {book.author_name?.[0] || "Unknown Author"}
            </p>

            <p className="text-gray-400 text-xs">
              {book.first_publish_year || "N/A"}
            </p>

            <div className="flex items-center mt-2 text-yellow-500 text-xs">
              ⭐⭐⭐⭐☆
              <span className="text-gray-500 ml-1">(120)</span>
            </div>

            <button className="mt-3 w-full bg-blue-500 text-white text-sm py-1.5 rounded-lg hover:bg-blue-600 transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
