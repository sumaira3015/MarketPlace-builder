import React from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

/*
 * OurProducts Component
 * Displays a grid of products with labels, names, prices, and a shopping cart button.
 */
const OurProducts = () => {
  // Product data array containing label, name, price, and image.
  const products = [
    { 
      id: "1", 
      label: "New", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "", 
      img: "/images/product-01.png" 
    },
    { 
      id: "2", 
      label: "Sale", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "$30", 
      img: "/images/product-02.png" 
    },
    { 
      id: "3", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-03.png" 
    },
    { 
      id: "4", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-04.png" 
    },
    { 
      id: "5", 
      label: "New", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-05.png" 
    },
    { 
      id: "6", 
      label: "Sale", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "$30", 
      img: "/images/product-08.png" 
    },
    { 
      id: "7", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "", 
      img: "/images/product-09.png" 
    },
    { 
      id: "8", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "", 
      img: "/images/product-01.png" },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto py-10 px-4 mt-10">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#272343] text-center mb-6">
        Our Products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative bg-transparent group">

            {/* Clickable Link wrapping product content */}
            <Link href={`/products/${product.id}`}>
              <div>
                <div className="w-full h-[312px] relative">
                  <Image
                    src={product.img}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded hover:scale-[1.03] transition-transform duration-300"
                  />
                
                  {product.label && (
                    <div
                      className={`absolute top-2 left-2 w-[49px] h-[26px] text-white text-xs font-semibold flex items-center justify-center rounded-lg ${
                        product.label === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                      }`}
                    >
                      {product.label}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex items-center justify-between mt-2">
                  <div>
    
                    <h3 className="text-base font-bold text-[#272343] hover:text-[#029FAE] transition-colors duration-200">
                      {product.name}
                    </h3>

                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-semibold text-[#272343]">{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-[44px] h-[44px] bg-[#F0F2F3] rounded flex items-center justify-center group-hover:bg-[#029FAE] transition-all duration-300">
                    <ShoppingCartIcon className="w-[22px] h-[22px] text-black group-hover:text-white" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;

