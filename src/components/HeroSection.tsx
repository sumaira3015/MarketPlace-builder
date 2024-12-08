import { FC } from "react";
import Image from "next/image"; 
import { ArrowRightIcon } from "@heroicons/react/24/outline"; 

const HomeSection: FC = () => {
  return (
    <div className="w-full h-[850px] flex items-center justify-center bg-[#F0F2F3] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1321px] px-6 md:px-8">
        <div className="flex flex-col justify-center items-start space-y-4 text-left w-full md:w-1/2 pl-8 md:pl-10 mt-2 md:mt-0"> 

          <p className="text-sm mt-[-150px] md:text-xl font-semibold text-[#272343]">
            Welcome to Chairy
          </p>

          <h2 className="text-[24px] md:text-[60px] font-bold text-[#272343] leading-tight ">
            Best Furniture Collection for your interior.
          </h2>

          <button className="w-[140px] h-[35px] md:w-[171px] md:h-[52px] bg-[#029FAE] text-white font-medium rounded-lg flex items-center justify-center space-x-2 hover:bg-[#027f85] transition-all duration-200">
            <span className="text-sm md:text-base">Shop Now</span>
            <ArrowRightIcon className="w-4 h-4 text-[#f3f8f8]" />
          </button>
        </div>

        <div className="w-full md:w-1/2 pr-8 md:pr-4 pl-12 md:pl-8 flex justify-center mt-6 md:mt-0">
          <Image
            src="/images/Product Image.png" 
            alt="Furniture Collection"
            width={434} 
            height={584} 
            className="object-cover rounded-lg w-[300px] md:w-[434px] md:h-[584px] mt-4 md:mt-0" 
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
