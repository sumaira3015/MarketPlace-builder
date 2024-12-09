import { FC } from "react";
import Image from "next/image"; 
import {
  ArrowPathIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline"; 

const AboutPage: FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto py-10 px-4">
      {/* The About Us section, where we explain what Comforty is about */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full max-w-[672px] h-[478px] bg-[#007580] p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">About Us - Comforty</h2>
            <p className="text-base text-white">
              At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
            </p>
          </div>

          <div className="mt-auto lg:mt-6">
            <button className="w-[179px] h-[56px] bg-[#4E4D93] text-white font-semibold rounded-lg hover:bg-[#3e3c7a] transition-all duration-300">
              View Collection
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-[619px] h-[478px]">
          <Image
            src="/images/product-10.png" 
            alt="Comforty Chairs"
            width={619}
            height={478}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="text-center mt-6 sm:mt-4"> 
        <h2 className="text-3xl font-bold text-[#272343] mb-4">What Makes Our Brand Different</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-md">
          <ClockIcon className="w-6 h-6 text-[#007580]" />
          <h3 className="text-xl font-semibold text-[#007580] mb-4">Next day as standard</h3>
          <p className="text-base text-[#007580]">Order before 3pm and get your order the next day as standard.</p>
        </div>
   
        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-md">
          <UserGroupIcon className="w-6 h-6 text-[#007580]" />
          <h3 className="text-xl font-semibold text-[#007580] mb-4">Made by true artisans</h3>
          <p className="text-base text-[#007580]">Our products are crafted by skilled artisans who take pride in every detail.</p>
        </div>
       
        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-md">
          <CurrencyDollarIcon className="w-6 h-6 text-[#007580]" />
          <h3 className="text-xl font-semibold text-[#007580] mb-4">Unbeatable prices</h3>
          <p className="text-base text-[#007580]">We offer the best prices for high-quality products that stand the test of time.</p>
        </div>
     
        <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-md">
          <ArrowPathIcon className="w-6 h-6 text-[#007580]" />
          <h3 className="text-xl font-semibold text-[#007580] mb-4">Recycled packaging</h3>
          <p className="text-base text-[#007580]">Our packaging is eco-friendly and made from 100% recycled materials.</p>
        </div>
      </div>

      {/* Section to show popular products */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-[#272343] mb-4 text-left">Our Popular Products</h2>
      </div>

      {/* Displaying products using flexbox */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="text-left w-full sm:w-[305px] lg:w-[630px]">
          <Image
            src="/images/product-11.png" 
            alt="The Popular suede sofa"
            width={630}
            height={375}
            className="h-[375px] w-full object-cover rounded-lg"
          />
          <h3 className="text-lg font-medium text-[#272343] mt-2">The Popular suede sofa</h3>
          <p className="text-sm font-semibold text-[#007580]">$99.00</p>
        </div>

        {/* Second product card */}
        <div className="text-left w-full sm:w-[305px] lg:w-[305px]">
          <Image
            src="/images/product-12.png"
            alt="The Dandy Chair"
            width={305}
            height={375}
            className="h-[375px] w-full object-cover rounded-lg"
          />
          <h3 className="text-lg font-medium text-[#272343] mt-2">The Dandy Chair</h3>
          <p className="text-sm font-semibold text-[#007580]">$99.00</p>
        </div>

        {/* Third product card */}
        <div className="text-left w-full sm:w-[305px] lg:w-[305px]">
          <Image
            src="/images/product-14.png" 
            alt="The Dandy Chair"
            width={305}
            height={375}
            className="h-[375px] w-full object-cover rounded-lg"
          />
          <h3 className="text-lg font-medium text-[#272343] mt-2">The Dandy Chair</h3>
          <p className="text-sm font-semibold text-[#007580]">$99.00</p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
