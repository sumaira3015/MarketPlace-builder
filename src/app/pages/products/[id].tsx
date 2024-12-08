// /pages/products/[id].tsx
import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const products = [
  { id: 1, name: "Library Stool Chair", price: "$20", description: "Comfortable chair for your library.", img: "/images/product-01.png" },
  { id: 2, name: "Modern Desk Lamp", price: "$30", description: "Stylish desk lamp for any modern desk.", img: "/images/product-02.png" },
  { id: 3, name: "Office Chair", price: "$50", description: "Ergonomic chair for all-day comfort.", img: "/images/product-03.png" },
  { id: 4, name: "Coffee Table", price: "$100", description: "A beautiful coffee table for your living room.", img: "/images/product-04.png" },
];

const ProductDetailPage: FC = () => {
  const router = useRouter();
  const { id } = router.query; 
  
  const product = products.find((prod) => prod.id === parseInt(id as string));

  if (!product) {
    return <div>Product not found</div>; 
  }

  return (
    <div className="w-full py-10 bg-[#F9F9F9]">
      <div className="w-full max-w-[1820px] mx-auto px-6 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <Image
              src={product.img}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 lg:pl-4">
            <h1 className="text-4xl font-bold text-[#272343] mb-4 mt-6 max-w-[450px] leading-tight">
              {product.name}
            </h1>
            <div className="flex justify-center items-center w-[110px] h-[35px] bg-[#029FAE] text-white text-sm font-semibold py-2 px-4 rounded-full mb-6">
              {product.price}
            </div>
            <div className="border-t border-gray-300 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 max-w-[450px]">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
