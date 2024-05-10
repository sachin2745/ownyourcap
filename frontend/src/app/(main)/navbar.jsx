'use client'
import React, { useState } from "react";
import { IoIosLogOut, IoMdSearch } from "react-icons/io";
import { FaAngleDown, FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import useAppContext from "@/context/AppContext";
// import clsx from "clsx";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },

  {
    id: 2,
    name: "About Us",
    link: "/About",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/Contact",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/MyShop",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/TopProducts",
  },
];

const DropdownLink = [
  {
    id: 1,
    name: "Nike",
    link: "/#",
  },
  {
    id: 2,
    name: "Adidas",
    link: "/#",
  },
  {
    id: 3,
    name: "Under Armour",
    link: "/#",
  },
  {
    id: 4,
    name: "HRX",
    link: "/#",
  },
  {
    id: 5,
    name: "Seloria",
    link: "/#",
  },
];

const Navbar = () => {



  const { logout, loggedIn, currentUser } = useAppContext();

  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const displayLoginOptions = () => {
    if (loggedIn) {
      return <>
        <div className="hs-dropdown relative inline-flex">
          <button
            id="hs-dropdown-custom-trigger"
            type="button"
            className="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            <img
              className="w-8 h-auto rounded-full"
              src={'http://localhost:5000/' + currentUser.avatar}
              alt={currentUser.name}
              rounded-lg w-8 h-8
            />
            <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-neutral-400">
              {currentUser.firstName}
            </span>
            <svg
              className="hs-dropdown-open:rotate-180 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div
            className=" z-10 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
            aria-labelledby="hs-dropdown-custom-trigger"
          >
            <p className="text-white">{currentUser.firstName}</p>
            <p className="text-white">{currentUser.email}</p>
            <button onClick={logout}
              className="bg-red-700 px-4 py-2 text-white rounded-xl font-serif"
            >
              Logout
            </button>
            <button onClick={logout}
              className="bg-blue-700 mx-3 px-4 py-2 text-white rounded-xl font-serif"
            >
              Profile
            </button>

          </div>


        </div>

      </>




    } else {
      return <a href="/login"
        className=" bg-gradient-to-r from-primary to-perfect_blue px-3 py-1  text-white relative overflow-hidden z-30 group hover:bg-sky-800 transition-all duration-500 rounded tracking-wider font-semibold"
      >
        Login
        <svg
          className="absolute inset-0 left-0 top-0 fill-sky-300 -z-30 opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:transition-all group-active:fill-sky-950"
          version="1.0"
          viewBox="0 0 204 113"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M85 6.1c-2.3 4.8-2.7 6.6-1.9 8.5.5 1.4.9 4 .9 5.7 0 1.8.4 3.8.9 4.6.9 1.4 1.9-3.6 1.9-9.9.1-4.4.7-7.1 1.7-7.8.9-.6 3.5-5.6 3.5-6.7 0-.3-.9-.5-2-.5-1.5 0-2.8 1.6-5 6.1zm81.2-3c-2.4 1.7-4 3.4-3.8 3.7.3.3 1.4-.2 2.4-1.1 1-1 2.2-1.7 2.5-1.7.4 0 1.6-.9 2.7-2 3-3 .9-2.4-3.8 1.1zM10.1 2.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zM109 6c0 .6.7 1 1.5 1s1.5-.2 1.5-.4-.7-.6-1.5-1c-.8-.3-1.5-.1-1.5.4zM.1 10.7c.1 5.3.6 4.9 1.1-1 .2-2 0-3.7-.4-3.7S0 8.1.1 10.7zm112-.1c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm-102 4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zM114 17.2c0 .9.5 2 1 2.3 1.3.8 1.3-.5 0-2.5-.8-1.3-1-1.3-1 .2zm14.6.3c.4.8.8 1.5 1 1.5.2 0 .4-.7.4-1.5s-.4-1.5-1-1.5c-.5 0-.7.7-.4 1.5zm36.1 2.5c-1.3 1.5-1.4 2-.3 2 .7 0 1.6-.9 1.9-2 .3-1.1.4-2 .3-2-.1 0-.9.9-1.9 2zm-47.6.5c.1 1.9 1.8 5.1 1.8 3.5 0-.8-.4-2.2-.9-3-.5-.8-.9-1.1-.9-.5zM.8 25.5c.6 1.1 2.2 3.3 3.6 4.9 2.7 3 3.3 6 1.6 7.1-.6.4-1.9 2.4-3 4.5l-2 3.9 4.3 3.2c2.3 1.8 4.3 3.4 4.5 3.4.1.1.4 6 .7 13.1.4 12.1.6 13 3 15.3 1.9 2 2.5 2.2 2.5.9 0-.8-.7-2.1-1.5-2.8-1.4-1.2-1.5-2.3-1.4-17.7.1-.8-1.3-11.6-6.6-12.9-2.9-.7-3.5-4.4-1-6.4.8-.7 1.5-1.9 1.5-2.7 0-.7.6-1.6 1.4-1.9 2.7-1-1.1-7.8-6.8-12.4-1.8-1.4-1.8-1.4-.8.5zM86.2 30c-1.2 2.7-2.6 5.2-3.1 5.4-.5.3-.2 2.6.7 5.1 1.4 4.4 1.4 4.6-1.3 8.5-2.2 3.2-2.7 4.7-2.2 7.7 1.1 6.3 2.9 6.5 2.1.2-.6-5.2-.5-5.8 2.1-8.2 2.6-2.4 2.7-2.7 1.7-6.9-.9-3.4-.8-4.7.3-6.5 1.6-2.5 3.6-10.3 2.6-10.3-.3 0-1.6 2.2-2.9 5zm33.8-4.2c0 1.6 6.7 8.9 7.4 8.1.3-.3-1.2-2.5-3.4-4.9-2.2-2.4-4-3.8-4-3.2zm36.7 4.6c-.4 1-.1 1.3.8.9.8-.3 1.2-.9.9-1.4-.7-1.2-1.1-1.1-1.7.5zm-3.1 5.3c-.6 1.4-.5 1.5.5.6.7-.7 1-1.5.7-1.8-.3-.3-.9.2-1.2 1.2zM127 36c0 .5.7 1 1.5 1s1.5.7 1.5 1.5.4 1.5.9 1.5 1.1 1 1.4 2.2c.4 1.2.9 1.9 1.2 1.6 1.4-1.3-.9-6-3.6-7.4-1.7-.8-2.9-1-2.9-.4zm7.4 9.8c-1.9 1.2-2.9 10.9-2.4 23.6.5 14.2 1.8 13.5 1.7-.9-.2-15.6.2-18.8 2.6-21.6 1.7-1.9.4-2.7-1.9-1.1zm5.4-.1c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zm6.5 0c.9.2 2.5.2 3.5 0 .9-.3.1-.5-1.8-.5-1.9 0-2.7.2-1.7.5zm-61.5 24c.2 3.6.5 6.3.7 6.1.1-.2.6-2.8.9-5.9.5-4.2.4-5.8-.6-6.1-1-.4-1.2.9-1 5.9zm85 3c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zm-82.6 5.8c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8zm93.8 0c0 1 4 4.5 5.3 4.5.6 0 .8-.1.6-.3-.2-.1-1.6-1.3-3.1-2.6-1.6-1.4-2.8-2.1-2.8-1.6z" />
        </svg>

      </a>
    }
  }

  return (
    <div className="shadow-md bg-white dark:bg-primary dark:text-black duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-mate_black dark:bg-primary py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-Jost font-bold text-white dark:text-mate_black text-2xl  sm:text-3xl flex gap-2">
              <img src="logo.png" alt="Logo" className="w-12 h-12 " />
              OwnYourCap
            </a>
          </div>


          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <a
              href="/viewCart"
              className="bg-gradient-to-r from-primary to-perfect_blue transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <div class="relative scale-75">
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                <span class="absolute -top-2 left-4 rounded-full bg-mate_black p-0.5 px-2 text-sm text-red-50">
                  4
                </span>
              </div>
            </a>

            {displayLoginOptions()}

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center dark:bg-black  font-Jost">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 text-black hover:text-blue-800 dark:text-white  dark:hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 text-black dark:text-white">
              Categories
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black  shadow-md">
              <ul>
                {DropdownLink.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-perfect_blue hover:text-white dark:hover:bg-primary dark:hover:text-white"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 text-black dark:text-white">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black  shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 text-black  hover:bg-perfect_blue hover:text-white dark:hover:bg-primary dark:hover:text-white "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;