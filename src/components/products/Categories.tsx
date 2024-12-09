import { FC } from "react";
import Image from "next/image";

const CustomGridSection: FC = () => {
  const categories = [
    { 
      id: "1", 
      name: "Wing Chair", 
      img: "/images/product-03.png" 
    },
    { 
      id: "2", 
      name: "Wooden Chair", 
      img: "/images/product-04.png" 
    },
    { 
      id: "3", 
      name: "Desk Chair", 
      img: "/images/product-01.png" 
    },
    { 
      id: "4", 
      name: "Rocking Chair", 
      img: "/images/product-08.png" 
    },
    { 
      id: "5", 
      name: "Modern Chair", 
      img: "/images/product-01.png" 
    },
  ];

  return (
    <section className="relative w-full max-w-[1920px] mx-auto py-10 px-4">
      <div className="absolute bottom-20 lg:left-10 transform -rotate-90 origin-left text-[#272343] font-3xl font-bold text-lg md:text-xl lg:text-2xl mb-10">
        EXPLORE NEW AND POPULAR STYLES
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ml-[50px] lg:ml-[60px]">
        <div className="relative h-[300px] md:h-[400px] lg:h-[648px] group">
          <div className="absolute left-4 top-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-md">
            <h3 className="text-lg font-semibold">{categories[0].name}</h3>
          </div>
          <Image
            src={categories[0].img}
            alt={categories[0].name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {categories.slice(1).map((category) => (
            <div
              key={category.id}
              className="relative w-full h-[150px] md:h-[200px] lg:h-[312px] group"
            >
              <div className="absolute left-4 top-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-md">
                <h3 className="text-sm md:text-base font-medium">
                  {category.name}
                </h3>
              </div>
              <Image
                src={category.img}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomGridSection;
