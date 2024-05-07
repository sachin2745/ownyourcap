import Link from "next/link";
import React from "react";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: "capimage4.jpg",
    title: "Nike Dry-FIT Club",
    rating: 5.0,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "capimage2.jpg",
    title: "Classic Cotton Bucket Hat",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "capimage3.jpg",
    title: "HRX Baseball Cap",
    rating: 4.7,
    color: "White",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "capimage1.jpg",
    title: "Hrx Cap",
    rating: 4.4,
    color: "Black",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "capimage5.jpg",
    title: "Seloria Cap",
    rating: 4.5,
    color: "White",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="pt-10  pb-10 bg-mate_black dark:bg-primary border-b-4 border-white dark:border-black">
      <div className="container ">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto font-Jost">
          <p data-aos="fade-up" className="text-md text-secondary dark:text-black text-Quicksand">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold text-secondary dark:text-black text-mono">
            Products
          </h1>
          
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 border-4 rounded-lg border-secondary bg-secondary dark:border-black dark:bg-black"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[240px] w-[200px] object-cover rounded-md"
                />
                <div className="bg-secondary mt-6 font-Jost dark:bg-black">
                  <h3 className="font-semibold text-mate_black dark:text-secondary">{data.title}</h3>
                  <p className="text-sm text-mate_black dark:text-secondary">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-mate_black dark:text-secondary">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <Link href={"/MyShop"}  class= "mt-10 cursor-pointer py-1 px-5 rounded-md bg-gray-950 text-white border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span  class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              View All Products
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;