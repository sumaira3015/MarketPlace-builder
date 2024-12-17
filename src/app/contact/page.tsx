import React from "react";
import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";
import { FaTrophy, FaHeadset, FaCheckCircle } from "react-icons/fa"; 

const ContactUs = () => {
  return (
    <section className="w-full max-w-[1058px] mx-auto py-16 px-4 h-auto">
      <h2 className="lg:text-5xl md:text-4xl text-4xl font-bold text-[#272343] mb-8 text-center mt-10">
        Get In Touch With Us
      </h2>

      {/* introduction about contacting the company */}
      <p className="text-xl text-[#9F9F9F] text-center mb-20 max-w-3xl mx-auto">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
        Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      {/* Address Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="space-y-6 lg:pl-8 px-6">
          <div className="flex items-start space-x-4 text-left">
            <MdLocationOn className="text-black h-6 w-6 mt-1" />
            <div className="max-w-[230px]">
              <h3 className="text-xl font-bold text-[#272343]">Address</h3>
              <p className="text-lg text-[#272343] leading-7">
                1234 Comfoty St, <br />
                Comfort City, Comfortland
              </p>
            </div>
          </div>

          {/* Phone Information */}
          <div className="flex items-start space-x-4 text-left">
            <MdPhone className="text-black h-6 w-6 mt-1" />
            <div className="max-w-[230px]">
              <h3 className="text-xl font-bold text-[#272343]">Phone</h3>
              <p className="text-lg text-[#272343] leading-7">(123) 456-7890</p>
            </div>
          </div>

          {/* Working Hours Information */}
          <div className="flex items-start space-x-4 text-left">
            <MdAccessTime className="text-black h-6 w-6 mt-1" />
            <div className="max-w-[250px]">
              <h3 className="text-xl font-bold text-[#272343]">Working Hours</h3>
              <p className="text-lg text-[#272343] leading-7 font-inter">
                Monday - Friday: <br />
                9 AM - 6 PM <br />
                Saturday: <br />
                10 AM - 2 PM
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:pr-12 px-6 space-y-6">
          <form className="space-y-6 max-w-[500px] mx-auto">
            <div>
              <label htmlFor="name" className="block text-[#272343] font-bold text-lg">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-[#272343] rounded"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#272343] font-bold text-lg">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-[#272343] rounded"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-[#272343] font-bold text-lg">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="w-full p-3 border border-[#272343] rounded"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#272343] font-bold text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message"
                className="w-full p-3 border border-[#272343] rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-[235px] h-[55px] bg-[#029FAE] text-white py-3 rounded-lg text-lg hover:bg-[#027c74] transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/*cards section with icons */}
      <div className="bg-[#F4F4F4] py-8 mt-16 mx-auto">
        <div className="max-w-[1098px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] text-left">
          <div className="flex items-center space-x-4">
            <FaTrophy className="text-black text-5xl border-2 border-black p-2 rounded-full mt-1" />
            <div>
              <h3 className="text-xl font-bold text-[#272343]">High Quality</h3>
              <p className="text-lg text-[#272343] font-inter">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaCheckCircle className="text-black text-5xl border-2 border-black p-2 rounded-full mt-1 " />
            <div>
              <h3 className="text-xl font-bold text-[#272343]">Warranty Protection</h3>
              <p className="text-lg text-[#272343] font-inter">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaHeadset className="text-black text-5xl border-2 border-black p-2 rounded-full mt-1" />
            <div>
              <h3 className="text-xl font-bold text-[#272343]">24 / 7 Support</h3>
              <p className="text-lg text-[#272343] font-inter">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
