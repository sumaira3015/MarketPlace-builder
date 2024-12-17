import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa"; // Import social media icons
import Image from 'next/image'; 

const Footer = () => {
  // Social media icons array
  const socialIcons = [
    { Icon: FaFacebookF, url: 'https://facebook.com' },
    { Icon: FaPinterestP, url: 'https://pinterest.com' },
    { Icon: FaTwitter, url: 'https://twitter.com' },
    { Icon: FaInstagram, url: 'https://instagram.com' },
    { Icon: FaYoutube, url: 'https://youtube.com' }
  ];

  // Category and support sections data
  const categories = ["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"];
  const supportItems = ["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"];

  return (
    <footer className="bg-white text-black py-12 px-4 border-t-2 border-gray-100 mt-8">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        
        {/* Logo and Social Media Links */}
        <div className="flex flex-col pl-0 sm:pl-2">
          <div className="flex items-center mb-4"> 
            <Image
              src="/images/logo.png" 
              alt="Comforty Logo"
              width={40}
              height={40}
              className="object-contain mr-4" 
            />
            <h3 className="text-2xl font-bold text-[#272343]">Comforty</h3>
          </div>
          <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>

          {/* Social media icons */}
          <div className="flex mt-4 space-x-4">
            {socialIcons.map(({ Icon, url }, index) => (
              <a 
                key={index} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 hover:border-2 hover:border-[#029FAE] rounded-full"
              >
                <Icon className="lg:w-5 lg:h-5 md:w-5 md:h-5 sm:w-4 sm:h-4  text-black hover:text-[#029FAE]" />
              </a>
            ))}
          </div>
        </div>

        {/* Category Section */}
        <div className="pl-0 sm:pl-4">
          <h3 className="text-xl font-bold text-[#272343] mb-4">Category</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">{category}</li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div className="pl-0 sm:pl-4">
          <h3 className="text-xl font-bold text-[#272343] mb-4">Support</h3>
          <ul>
            {supportItems.map((item, index) => (
              <li key={index} className="text-sm leading-[24px] hover:text-[#029FAE] mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="pl-0 sm:pl-2">
          <h3 className="text-xl font-bold text-[#272343] mb-4">Newsletter</h3>
          <p className="text-sm mb-4 leading-[24px]">Your email</p>
          
          {/* Newsletter form */}
          <div className="flex flex-col sm:flex-row mb-2"> 
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[280px] h-[40px] p-2 text-black rounded-l border border-gray-300 mb-2 sm:mb-0"
            />
            <button className="lg:w-[127px] lg:h-[40px] bg-[#029FAE] hover:border-2 hover:border-[#029FAE] text-white w-full sm:w-auto h-[40px] rounded-r ml-2">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
