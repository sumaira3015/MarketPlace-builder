import { FC } from "react";
import { QuestionMarkCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline"; // Import ChevronDownIcon for dropdown
import Link from "next/link"; 

const TopHeader: FC = () => {
  return (
    <div className="bg-[#272343] text-white h-[45px] flex items-center justify-between px-4 max-w-[1920px] mx-auto">
      <p className="text-sm font-normal font-inter hidden sm:block">
        Free shipping on all orders over $50
      </p>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-sm font-normal font-inter">English</span>
          <ChevronDownIcon className="w-4 h-4 text-white" /> 
        </div>

        <Link href="/faqs" className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
          <span className="text-sm font-normal font-inter">Faqs</span>
        </Link>

        <div className="flex items-center space-x-2 cursor-pointer">
          <QuestionMarkCircleIcon className="w-5 h-5 text-white" />
          <span className="text-sm font-normal font-inter">Need Help?</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;


