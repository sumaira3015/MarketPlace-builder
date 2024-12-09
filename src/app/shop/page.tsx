"use client";

import { FC, useState } from "react";
import Image from "next/image";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import OurProducts from "@/components/products/OurProducts";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const SingleProductPage: FC = () => {
  const [showAll, setShowAll] = useState(false); 

  return (
    <div className="w-full py-10 bg-[#F9F9F9]">
      <div className="w-full max-w-[1820px] mx-auto px-6 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <Image
              src="/images/product-02.png"
              alt="Product"
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 lg:pl-4">
            <h1 className="text-4xl font-bold text-[#272343] mb-4 mt-6 max-w-[450px] leading-tight">
              Library Stool Chair
            </h1>
            <div className="flex justify-center items-center w-[110px] h-[35px] bg-[#029FAE] text-white text-sm font-semibold py-2 px-4 rounded-full mb-6">
              $99.99
            </div>
            <div className="border-t border-gray-300 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 max-w-[450px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. 
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <button className="w-[150px] h-[50px] bg-[#029FAE] text-white font-medium rounded-lg hover:bg-[#027f85] transition-all duration-200 flex items-center justify-center">
              <ShoppingCartIcon className="w-5 h-5 mr-2 text-white" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#272343]">All Products</h2>
            <button
              onClick={() => setShowAll(true)} 
              className="text-[#029FAE] font-medium hover:underline"
            >
              View All
            </button>
          </div>
          <FeaturedProducts /> 
        </div>

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