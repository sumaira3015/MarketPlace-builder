import { FC } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaPaypal, FaCcVisa } from "react-icons/fa"; // Import payment icons
import Image from 'next/image'; 

const Footer: FC = () => {
  return (
    <footer className="bg-[#FFFFFF] text-black py-12 px-4 border-t-2 border-gray-100 mt-8">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        <div className="flex flex-col">
          <div className="flex items-center mb-4"> 
            <Image
              src="/images/logo-01.png" 
              alt="Comforty Logo"
              width={40}
              height={40}
              className="object-contain mr-4" 
            />
            <h3 className="text-2xl font-bold text-[#272343]">Comforty</h3>
          </div>
          <ul>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-6">Vivamus tristique odio sit amet velit semper</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Eu posuere turpis interdum</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Cras egestas purus</li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:border-2 hover:border-[#029FAE] rounded-full">
              <FaFacebookF className="w-5 h-5 text-black hover:text-[#029FAE]" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:border-2 hover:border-[#029FAE] rounded-full">
              <FaPinterestP className="w-5 h-5 text-black hover:text-[#029FAE]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:border-2 hover:border-[#029FAE] rounded-full">
              <FaTwitter className="w-5 h-5 text-black hover:text-[#029FAE]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:border-2 hover:border-[#029FAE] rounded-full">
              <FaInstagram className="w-5 h-5 text-black hover:text-[#029FAE]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:border-2 hover:border-[#029FAE] rounded-full">
              <FaYoutube className="w-5 h-5 text-black hover:text-[#029FAE]" />
            </a>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-xl font-bold text-[#272343] mb-4">Category</h3>
          <ul>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Sofa</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Armchair</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Wing Chair</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Desk Chair</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Wooden Chair</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Park Bench</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-bold text-[#272343] mb-4">Support</h3>
          <ul>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Help & Support</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Terms & Conditions</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Privacy Policy</li>
            <li className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">Help</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-bold text-[#272343] mb-4">Newsletter</h3>
          <p className="text-sm mb-4 leading-[24px]">Your email</p>
          <div className="flex mb-2"> 
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[285px] h-[42px] p-2 text-black rounded-l border border-gray-300"
            />
            <button className="bg-[#029FAE] text-white w-[120px] h-[40px] px-6 py-2 rounded-r ml-2">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      <hr className="border-t-2 border-gray-100 mt-8" /> 

      <div className="flex justify-between items-center mt-4 text-sm">
        <p>© 2021 - Blogy - Designed & Developed by Zakirsoft</p>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaPaypal className="w-6 h-6 text-gray-400 hover:text-dark-gray" />
            <span className="font-bold">PayPal</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCcVisa className="w-6 h-6 text-gray-400 hover:text-dark-gray" />
            <span className="font-bold">Visa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
