import { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

type Product = {
  id: string;
  label: string;
  name: string;
  price: string;
  originalPrice: string;
  img: string;
};

const ProductPage: FC<{ product: Product }> = ({ product }) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-10 px-4">
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

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#272343] mb-4">{product.name}</h1>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-lg font-semibold text-[#029FAE]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
            )}
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. 
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>

          <div>
            <button className="w-full sm:w-[200px] h-[44px] bg-[#029FAE] text-white py-3 rounded-lg hover:bg-[#027c74] transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = [
    { 
      id: "1", 
      label: "New", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-01.png" 
    },
    { 
      id: "2", 
      label: "Sale", 
      name: "Library Stool Chair",
      price: "$20", 
      originalPrice: "$30", 
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
      img: "/images/product-05.png" },
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
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-09.png"
    },
    { 
      id: "8", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-10.png" 
    },
  ];

  const product = products.find((product) => product.id === params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false, 
  };
};


export default ProductPage;
