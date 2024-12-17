import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

// Array holding product data
const products = [
  {
    id: "1",
    label: "New",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "",
    img: "/images/product-01.png",
  },
  {
    id: "2",
    label: "Sale",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "$30",
    img: "/images/product-02.png",
  },
  {
    id: "3",
    label: "",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "",
    img: "/images/product-03.png",
  },
  {
    id: "4",
    label: "",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "",
    img: "/images/product-04.png",
  },
  {
    id: "5",
    label: "New",
    name: "Library Stool Chair",
    price: "$20",
    originalPrice: "",
    img: "/images/product-05.png",
  },
  {
    id: "6",
    label: "",
    name: "Modern Desk Chair",
    price: "$25",
    originalPrice: "$35",
    img: "/images/product-08.png",
  },
  {
    id: "7",
    label: "Featured",
    name: "Office Desk Chair",
    price: "$45",
    originalPrice: "$55",
    img: "/images/product-09.png",
  },
  {
    id: "8",
    label: "",
    name: "Dining Chair",
    price: "$30",
    originalPrice: "$40",
    img: "/images/product-01.png",
  },
  {
    id: "9",
    label: "",
    name: "Executive Chair",
    price: "$50",
    originalPrice: "$60",
    img: "/images/product-07.png",
  },
  {
    id: "10",
    label: "New",
    name: "Accent Chair",
    price: "$35",
    originalPrice: "",
    img: "/images/product-06.png",
  },
  {
    id: "11",
    label: "",
    name: "Executive Chair",
    price: "$50",
    originalPrice: "$60",
    img: "/images/product-03.png",
  },
  {
    id: "12",
    label: "New",
    name: "Accent Chair",
    price: "$35",
    originalPrice: "",
    img: "/images/product-02.png",
  },
];

// This function is used by Next.js for dynamic routing, fetching the product IDs
export const generateStaticParams = async () => {
  return products.map((product) => ({
    id: product.id,
  }));
};

// This is the main Product Page component
const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  // If the product is not found, we show a "Product not found" message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <section className="w-full max-w-[1920px] mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <Image
              src={product.img}
              alt={product.name}
              width={675}
              height={607}
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>

          <div className="flex-1">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-[#272343] mb-8 mt-6 lg:max-w-[50%] max-w-[90%] leading-[1.5]">
              {product.name}
            </h1>

            <div className="flex flex-col items-start space-y-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-[120px] h-[35px] text-lg bg-[#029FAE] text-white py-3 rounded-full flex items-center justify-center mb-8">
                  {product.price}.00 USD
                </span>
              </div>
              <hr className="border-t border-gray-300 w-full" />
            </div>

            <p className="text-lg text-gray-600 mb-8 mt-8 lg:max-w-[70%] max-w-[100%] sm:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>

            <div>
              <button className="lg:w-[212px] lg:h-[57px] md:w-[180px] w-[160px] bg-[#029FAE] text-xl text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#027c74] transition-all duration-300">
                <ShoppingCartIcon className="w-[29px] h-[29px] text-white" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-[1920px] mx-auto py-10 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[#272343]">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="p-4 flex flex-col justify-between">
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.img}
                  alt={product.name}
                  width={263}
                  height={263}
                  className="hover:scale-[1.03] transition-transform duration-300 w-full h-auto"
                />
                <div className="flex justify-between mt-4">
                  <h3 className="text-base font-semibold text-[#272343] hover:text-[#029FAE] transition-colors duration-200 cursor-pointer">
                    {product.name}
                  </h3>
                  <span className="text-[#029FAE] font-bold">{product.price}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* More Products */}
        <div className="mt-6">
          <h3 className="text-3xl font-bold text-[#272343] mb-4">More Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.slice(5, 10).map((product) => (
              <div key={product.id} className="p-4 flex flex-col justify-between">
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={263}
                    height={263}
                    className="hover:scale-[1.03] transition-transform duration-300 w-full h-auto"
                  />
                  <div className="flex justify-between mt-4">
                    <h3 className="text-base font-semibold text-[#272343] hover:text-[#029FAE] transition-colors duration-200 cursor-pointer">
                      {product.name}
                    </h3>
                    <span className="text-[#029FAE] font-bold">{product.price}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
