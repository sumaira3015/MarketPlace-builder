import { FC } from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const FeaturedProducts: FC = () => {
  const products = [
    { id: 1, label: "New", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-01.png" },
    { id: 2, label: "Sale", name: "Library Stool Chair", price: "$20 $30", img: "/images/Featured-Image-02.png" },
    { id: 3, label: "", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-03.png" },
    { id: 4, label: "", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-04.png" },
    { id: 1, label: "New", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-01.png" },
    { id: 2, label: "Sale", name: "Library Stool Chair", price: "$20 $30", img: "/images/Featured-Image-02.png" },
    { id: 3, label: "", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-03.png" },
    { id: 4, label: "", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-04.png" },
    { id: 1, label: "New", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-01.png" },
    { id: 2, label: "Sale", name: "Library Stool Chair", price: "$20 $30", img: "/images/Featured-Image-02.png" },
    { id: 3, label: "", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-03.png" },
    { id: 4, label: "", name: "Library Stool Chair", price: "$20", img: "/images/Featured-Image-04.png" },
    
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto py-10 px-4">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center text-[#272343] mb-6">All Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-transparent group"
          >
            {/* Product Image */}
            <div className="w-full h-[312px] relative">
              <Image
                src={product.img}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>

            {/* Product Info */}
            <div className="flex items-center justify-between mt-2">
              {/* Name and Price */}
              <div>
                <h3 className="text-base font-semibold text-[#272343] hover:text-[#029FAE] transition-colors duration-200 cursor-pointer">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>

              {/* Add to Cart Button */}
              <button className="w-[44px] h-[44px] bg-[#F0F2F3] rounded flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300">
                <ShoppingCartIcon className="w-[22px] h-[22px] text-black" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
