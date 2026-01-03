import React, { useState, useMemo } from "react";
import Nav from "../components/Nav";
import { categories } from "../category";
import ProductCard from "../components/ProductCard";
import { products } from "../products";

function Home({ setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName === "All" ? null : categoryName);
    setSearchQuery(""); // Clear search when category is selected
  };

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        setCurrentPage={setCurrentPage}
      />

      {/* Categories Section */}
      <div className="p-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCategoryClick(item.name)}
            className={`bg-white rounded-lg shadow-md overflow-hidden text-[60px] cursor-pointer hover:bg-green-200 font-semibold transition-all ${
              selectedCategory === item.name || (item.name === "All" && !selectedCategory)
                ? "ring-2 ring-blue-600"
                : ""
            }`}
          >
            {/* IMAGE / ICON (fills the top of the card) */}
            {typeof item.image === "string" ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-33 sm:h-48 lg:h-39 object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-28 sm:h-32 lg:h-36 text-3xl">
                {item.image}
              </div>
            )}

            <div className="p-4">
              <p className="mt-0 font-semibold text-sm text-center">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <div className="px-6 pb-8 mt-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : selectedCategory
              ? `${selectedCategory} Products`
              : "Featured Products"}
            {filteredProducts.length > 0 && (
              <span className="text-lg text-gray-600 font-normal ml-2">
                ({filteredProducts.length} items)
              </span>
            )}
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded"></div>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600 text-lg">
              {searchQuery
                ? `No products found for "${searchQuery}"`
                : "No products available"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
