import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Show a toast notification
    alert(`${product.name} added to cart!`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {/* Ribbon */}
        {product.ribbon && (
          <div className="absolute top-2 left-2 z-10 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
            <span>⭐</span>
            <span>{product.ribbon}</span>
          </div>
        )}

        {/* Wishlist Icon */}
        <div className="absolute top-2 right-2 z-10">
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Product Image */}
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x400?text=No+Image";
          }}
        />

        {/* Stock Message */}
        {product.stock && (
          <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-xs py-1 px-2 text-center font-semibold">
            {product.stock}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 text-base leading-tight min-h-[3rem]">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors text-sm font-semibold shadow-sm"
          >
            Add to Cart
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2.5 px-4 rounded-md hover:bg-gray-200 active:bg-gray-300 transition-colors text-sm font-semibold border border-gray-200">
            Similar
          </button>
        </div>
      </div>
    </div>

    
  );
}

export default ProductCard;

