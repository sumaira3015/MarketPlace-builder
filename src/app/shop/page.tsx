"use client";

import { useState } from "react";
import Image from "next/image";
import FeaturedProducts from "@/components/products/FeaturedProduct";
import OurProducts from "@/components/products/OurProducts";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const SingleProductPage = () => {
  const [showAll, setShowAll] = useState(false); 

  return (
    <div className="w-full py-10">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-10 space-y-10">
        {/* Product Overview */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Section */}
          <div className="flex-1">
            <Image
              src="/images/product-02.png"
              alt="Product"
              width={675}
              height={607}
              className="object-cover rounded-lg w-full md:h-[400px] lg:h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 lg:pl-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#272343] mb-6 md:mb-4 lg:mb-8 leading-[1.2] md:leading-[1.2] md:max-w-[70%] lg:leading-[1.5]">
              Library Stool Chair
            </h1>

            <div className="flex justify-center items-center w-[110px] h-[35px] bg-[#029FAE] text-white text-sm font-semibold py-2 px-4 rounded-full mb-6 md:mb-8">
              $99.99
            </div>

            <div className="border-t border-gray-300 mb-6 md:mb-8">
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mt-6 max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. 
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
              <button className="w-[160px] md:w-[180px] lg:w-[212px] h-[50px] md:h-[57px] bg-[#029FAE] text-white font-medium rounded-lg hover:bg-[#027f85] transition-all duration-200 flex items-center justify-center">
                <ShoppingCartIcon className="w-5 h-5 mr-2 text-white" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#272343]">All Products</h2>
            <button
              onClick={() => setShowAll(true)} 
              className="text-[#029FAE] font-medium hover:underline"
            >
              View All
            </button>
          </div>
          <FeaturedProducts /> 
        </div>

        {/* Show All Products */}
        {showAll && (
          <div className="space-y-6">
            <OurProducts /> 
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
