'use client'

import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { useState } from "react";

export default function MarketplaceClient({products}: {products:Product[]} ) {

  const categories = ["All Products", "Footwear", "Bags", "Clothing", "Home Decor", "Jewelry"];
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [open, setOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState("")

  return (
    <>
      {/* Filters */}
      <div className="my-6 font-sans text-[0.94rem] text-white/50 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
        {/* Dropdown custom */}
        <div className="relative w-40">
          <div
            className="px-4 py-2  bg-white/10 text-white cursor-pointer flex justify-between items-center transition hover:bg-white/20"
            onClick={() => setOpen(!open)}
          >
            {selectedCategory}
            <svg
              className="w-4 h-4 transition-transform"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {open && (
            <div className="absolute mt-1 w-full bg-black/80 shadow-lg z-10">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="px-4 py-2 cursor-pointer hover:bg-white/20 text-white transition"
                  onClick={() => {
                    setSelectedCategory(cat); //When clicking, the caterogy will change to that one that was clicked.
                    setOpen(false);
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="max-price" className="whitespace-nowrap">Max Price</label>
          <input
            type="text"
            id="max-price"
            className="px-3 py-2 bg-white/10 text-white placeholder-white focus:outline-none focus:bg-white/20 transition w-24 text-center text-[0.94rem]"
            // placeholder="$0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <section className="w-full flex justify-center px-10 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-10 w-full max-w-[1200px]">
          {products
          .filter((product) => selectedCategory === "All Products" ? true : product.category === selectedCategory)
          .filter((product) => maxPrice ? product.price <= parseFloat(maxPrice) : true )
          .map((element) => (
            <ProductCard key={element.id} product={element} />
          ))}
        </div>
      </section>
    </>
  );
}