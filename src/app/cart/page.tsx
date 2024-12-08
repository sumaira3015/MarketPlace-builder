import { FC } from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartPage: FC = () => {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      img: "/images/Featured-Image-01.png",
      price: "$99",
      qty: 1,
    },
    {
      id: 2,
      name: "Library Stool Chair",
      img: "/images/Featured-Image-02.png",
      price: "$99",
      qty: 1,
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto py-10 px-4">
      {/* Cart Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product List */}
        <div className="space-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b pb-4"
            >
              {/* Product Image */}
              <div className="w-1/4 h-[100px] relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>

              {/* Product Details */}
              <div className="w-3/4 flex justify-between">
                <div className="text-[#272343]">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">Size: L, Quantity: {product.qty}</p>
                </div>

                <div className="text-[#272343] font-semibold">{product.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-transparent rounded-lg p-6 max-w-[400px] border border-gray-300">
          <h2 className="text-xl font-semibold text-[#272343] mb-6">Summary</h2>
          <div className="flex justify-between py-2 border-b border-gray-300">
            <span className="text-sm text-gray-500">Subtotal</span>
            <span className="font-semibold">$198.00</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-300">
            <span className="text-sm text-gray-500">Estimated Delivery & Handling</span>
            <span className="font-semibold">Free</span>
          </div>
          <div className="flex justify-between py-4 border-b border-gray-300">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">$198.00</span>
          </div>
          <button className="w-full bg-[#029FAE] text-white text-center py-3 rounded-lg mt-4 flex items-center justify-center">
            <ShoppingCartIcon className="w-5 h-5 mr-2 text-white" />
            Member Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
