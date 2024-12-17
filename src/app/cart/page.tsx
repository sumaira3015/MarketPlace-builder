import React from "react";
import Image from "next/image";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";

const CartSection = () => {
  return (
    <section className="bg-[#ffffff] py-12">
      <div className="max-w-[1920px] mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-8 text-[#757575] pl-6">Bag</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-8 bg-white shadow rounded-lg p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-6 mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <div className="order-1 sm:order-none">
                  <Image
                    src="/images/product-03.png"
                    alt="Chair"
                    width={180} 
                    height={180} 
                    className="object-cover rounded-md"
                  />
                </div>
                
                {/* Product Details */}
                <div className="w-full order-2 sm:order-none">
                  <h2 className="text-lg sm:text-lg font-medium">Library Stool Chair</h2>
                  <p className="text-sm sm:text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <p className="text-sm sm:text-sm text-gray-500">Size: L</p>
                    <p className="text-sm sm:text-sm text-gray-500">Quantity: 1</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <HeartIcon className="w-6 h-6 text-gray-500 hover:text-[#027b89] cursor-pointer" />
                    <TrashIcon className="w-6 h-6 text-gray-500 hover:text-[#027b89] cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="text-sm sm:text-lg font-medium mb-20">MRP: $99</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <div className="order-1 sm:order-none">
                  <Image
                    src="/images/product-05.png"
                    alt="Desk Chair"
                    width={180} 
                    height={180} 
                    className="object-cover rounded-md"
                  />
                </div>
                
                <div className="w-full order-2 sm:order-none">
                  <h2 className="text-lg sm:text-lg font-medium">Library Stool Chair</h2>
                  <p className="text-sm sm:text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <p className="text-sm sm:text-sm text-gray-500">Size: M</p>
                    <p className="text-sm sm:text-sm text-gray-500">Quantity: 1</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <HeartIcon className="w-6 h-6 text-gray-500 hover:text-[#027b89] cursor-pointer" />
                    <TrashIcon className="w-6 h-6 text-gray-500 hover:text-[#027b89] cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="text-sm sm:text-lg font-medium mb-20">MRP: $99</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 bg-white shadow rounded-lg p-6">
            <h2 className="text-sm sm:text-lg font-medium mb-4 text-[#111111]">Summary</h2>
            <div className="flex justify-between text-xs sm:text-sm mb-2">
              <span>Subtotal</span>
              <span>$198.00</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm mb-2">
              <span>Estimated Delivery</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm sm:text-lg font-semibold mb-6">
              <span>Total</span>
              <span>$198.00</span>
            </div>
            <button
              className="w-full h-[50px] bg-[#029FAE] text-white py-[8px] rounded-full hover:bg-[#027b89]"
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;

