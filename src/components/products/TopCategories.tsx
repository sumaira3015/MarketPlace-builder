import React from "react";
import Image from "next/image";

const TopCategories = () => {

  // Product data array containing label, name, count, and image.
  const categories = [
    { 
      id: "1", 
      name: "Wing Chair", 
      count: "3,584 Products", 
      img: "/images/product-05.png" 
    },
    { 
      id: "2", 
      name: "Wooden Chair", 
      count: "157 Products", 
      img: "/images/product-06.png" 
    },
    { 
      id: "3", 
      name: "Desk Chair", 
      count: "154 Products", 
      img: "/images/product-03.png" 
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto py-10 px-4">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#272343] mb-6 text-center sm:text-left">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative w-full h-[300px] sm:h-[350px] lg:h-[424px] bg-gray-100 rounded-lg overflow-hidden group"
          >
            <Image
              src={category.img}
              alt={category.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-4 py-2 rounded w-full h-[85px]"
            >
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm">{category.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;