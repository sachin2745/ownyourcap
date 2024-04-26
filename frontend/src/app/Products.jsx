import React from "react";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: "nike.png",
    title: "Nike Dry-FIT Club",
    rating: 5.0,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "adidashat.avif",
    title: "Classic Cotton Bucket Hat",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "hrx.png",
    title: "HRX Baseball Cap",
    rating: 4.7,
    color: "White",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "hrxcap.png",
    title: "Hrx Cap",
    rating: 4.4,
    color: "Black",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "seloria.webp",
    title: "Seloria Cap",
    rating: 4.5,
    color: "White",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="pt-10  pb-10 bg-primary/90">
      <div className="container ">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-black text-mono">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-black text-mono">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-black text-mono">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[240px] w-[200px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-white">{data.title}</h3>
                  <p className="text-sm text-gray-900">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-900">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className=" btn btn-active btn-neutral text-center mt-10 cursor-pointer py-1 px-5 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;