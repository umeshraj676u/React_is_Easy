import React from "react";
import Nav from "../components/Nav";
import { categories } from "../category";

function Home() {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      <div className="p-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* IMAGE / ICON (fills the top of the card) */}
            {typeof item.image === "string" ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-33 sm:h-48 lg:h-39 object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://picsum.photos/seed/fallback/400";
                }}
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
    </div>
  );
}

export default Home;
