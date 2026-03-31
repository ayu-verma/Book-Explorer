import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import SkeletonCard from "./components/SkeletonCard"; //

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search.trim()) return;

    setLoading(true);
    setError("");

    const delayDebounce = setTimeout(() => {
      fetch(`https://openlibrary.org/search.json?q=${search}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((data) => {
          setProducts(data.docs || []);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError("Something went wrong!");
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <SearchBar search={search} setSearch={setSearch} />

      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
          {Array(10)
            .fill()
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      )}

      {!loading && error && <p className="text-center text-red-500">{error}</p>}

      {/* 📭 No Results */}
      {!loading && products.length === 0 && !error && (
        <p className="text-center text-gray-500 mt-5">No books found 📭</p>
      )}

      {!loading && !error && products.length > 0 && (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default App;
