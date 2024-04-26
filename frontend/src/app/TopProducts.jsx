import React from "react";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: "underblack.png",
    title: "Under Armour Cap",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "seloriawhite1.png",
    title: "Seloria Cap",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "adidasblack.png",
    title: "Adidas Cap",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container pt-10 pb-10 bg-primary/90">
        {/* Header section */}
        <div className="text-center mb-24">
          <p data-aos="fade-up" className="text-sm text-black">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl text-black font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-secondary hover:bg-black/80 dark:hover:bg-secondary hover:text-black relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl text-black font-bold">{data.title}</h1>
                <p className="text-black group-hover:text-black duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-secondary hover:scale-105 duration-300 text-black py-1 px-4 rounded-full mt-4 group-hover:bg-primary group-hover:text-black"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;