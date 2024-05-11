'use client'
import React, { useState } from "react";
import { IoIosLogOut, IoMdSearch } from "react-icons/io";
import { FaAngleDown, FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import useAppContext from "@/context/AppContext";
import useProductContext from "@/context/ProductContext";
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

  const { getCartItemsCount } = useProductContext();

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
            className=" z-10 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-black dark:border dark:border-neutral-700"
            aria-labelledby="hs-dropdown-with-header "
          >
            <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
              <p className="text-sm text-gray-500 dark:text-neutral-400">Signed in as</p>
              <p className="text-sm font-medium text-gray-800 dark:text-neutral-300 font-Jost">
                {currentUser.email}
              </p>
            </div>
            <div className="mt-2 py-2 first:pt-0 last:pb-0 font-Jost">
              <a
                className="flex items-center  gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="/billing"
              >
                <svg
                  className="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0  31 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M28.268.5H2.971l-.252.002A2.344 2.344 0 00.5 2.805v14.473a2.333 2.333 0 00.67 1.666 2.326 2.326 0 001.656.701h25.32a2.354 2.354 0 002.344-2.324V2.848c.012-1.229-.945-2.26-2.222-2.348zm-6.116 4.691h1.502l-2.166 4.33h-1.5l2.164-4.33zm-1.207 0l-2.168 4.33h-17.2v-4.33h19.368zm8.47 4.33h-6.718l2.164-4.33h4.553v4.33zM2.75 1.576h25.297l.184-.002c.67.049 1.19.602 1.184 1.268v1.262H1.577V2.811A1.24 1.24 0 012.75 1.576zm26.664 15.738a1.271 1.271 0 01-1.268 1.254H2.832a1.263 1.263 0 01-1.256-1.287v-6.672h27.838v6.705zm-17.533-2.347H2.846a.538.538 0 100 1.076h9.035a.538.538 0 000-1.076zm3.613-1.807H2.846a.538.538 0 100 1.076h12.648a.539.539 0 100-1.076z"
                    fillRule="evenodd"
                  />       </svg>
                Billing
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="/setting"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path
                    d="M12.714 2c.55-.01 1.071.19 1.46.57.391.37.6.88.6 1.42 0 1.1.91 1.991 2.041 1.991.35 0 .7-.1 1.01-.27.97-.522 2.18-.19 2.73.74l.68 1.17c.17.3.27.64.27.99 0 .71-.39 1.37-1.02 1.72-.31.17-.57.43-.75.73a1.96 1.96 0 00.75 2.67 1.978 1.978 0 01.75 2.7l-.68 1.13c-.36.62-1.03 1-1.75 1-.36 0-.72-.09-1.02-.27-.32-.17-.67-.27-1.02-.27-.54 0-1.06.21-1.44.59-.39.37-.6.88-.6 1.41 0 1.09-.91 1.98-2.04 1.98h-1.37c-.54 0-1.05-.22-1.42-.59-.38-.38-.58-.88-.58-1.4 0-1.1-.9-1.99-2.03-1.99-.37 0-.73.1-1.04.29a2.15 2.15 0 01-1.55.2c-.52-.14-.97-.48-1.24-.93l-.64-1.13a1.949 1.949 0 01-.25-1.56c.14-.53.5-.98.99-1.25.31-.17.57-.42.75-.73a1.98 1.98 0 00-.75-2.67 1.947 1.947 0 01-.74-2.67l.64-1.12c.27-.47.72-.81 1.25-.95a2.066 2.066 0 011.56.21c.32.17.67.26 1.02.26.54 0 1.06-.21 1.44-.58.38-.37.59-.88.59-1.4 0-1.1.91-1.99 2.04-1.99zm.401 7.481a2.853 2.853 0 00-3.07.59c-.8.78-1.05 1.97-.61 2.99a2.794 2.794 0 002.59 1.7h.01c.75.01 1.45-.28 1.98-.8.53-.51.83-1.21.83-1.94.01-1.11-.68-2.12-1.73-2.54z"
                    fill="#200E32"
                  />
                </svg>
                Settings
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="/profile"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path
                    d="M13.25 12.25h-2.5a6.5 6.5 0 00-6.5 6.5 4 4 0 004 4h7.5a4 4 0 004-4 6.5 6.5 0 00-6.5-6.5z"
                    fill="#81d4fa"
                  />
                  <path
                    d="M16 22.75H8A3.754 3.754 0 014.25 19v-1a6.713 6.713 0 013.207-5.747.75.75 0 01.79 1.277A5.22 5.22 0 005.75 18v1A2.253 2.253 0 008 21.25h8A2.253 2.253 0 0018.25 19v-1A5.256 5.256 0 0013 12.75h-1a.75.75 0 010-1.5h1A6.758 6.758 0 0119.75 18v1A3.754 3.754 0 0116 22.75z"
                    fill="#1b1464"
                  />
                  <path
                    d="M12 12.75A5.75 5.75 0 1117.75 7 5.756 5.756 0 0112 12.75zm0-10A4.25 4.25 0 1016.25 7 4.255 4.255 0 0012 2.75z"
                    fill="#1b1464"
                  />
                  <circle cx="12" cy="7" fill="#fff" r="5" />
                </svg>
                My Account
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                {/* Darkmode Switch */}
                <h3 className="flex-1 ">DarkMode</h3>
                <DarkMode className="flex-1 " />
              </a>
            </div>
            <div className=" first:pt-0 last:pb-0 font-Jost">
              <a onClick={logout}
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"

              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M7 6a1 1 0 000-2H5a1 1 0 00-1 1v14a1 1 0 001 1h2a1 1 0 000-2H6V6zm13.82 5.42l-2.82-4a1 1 0 00-1.39-.24 1 1 0 00-.24 1.4L18.09 11H10a1 1 0 000 2h8l-1.8 2.4a1 1 0 00.2 1.4 1 1 0 00.6.2 1 1 0 00.8-.4l3-4a1 1 0 00.02-1.18z" />
                </svg>
                Logout
              </a>

            </div>
          </div>
        </div>
      </>
    } else {
      return <a href="/login"
       className="font-Jost overflow-hidden relative w-20 p-2 h-10 bg-gradient-to-r from-primary to-perfect_blue text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group">
        Login
        <span className="absolute w-20 h-28 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
        <span className="absolute w-24 h-28 -top-8 -left-2 bg-sky-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
        <span className="absolute w-24 h-28 -top-8 -left-2 bg-sky-500 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left" />
        <span className="group-hover:opacity-100 group-hover:duration-1000   duration-100 opacity-0 absolute  top-1.0 left-3 z-10 ">
          Login
        </span>
      </a>    
    }
  }

  return (
    <div className="shadow-md bg-white dark:bg-primary dark:text-black duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-mate_black dark:bg-primary py-2">
        <div className="container flex justify-between items-center">
          <div>
          <a
            href="/"
            className="flex items-center justify-between mr-4"
          >
            <img
              src="/logo.png"
              className="mr-3 h-14 dark:text-primary"
              alt=" Logo"
            />
            <span className="self-center text-3xl font-semibold font-Jost white-nowrap text-white dark:text-black">
              OWNYOURCAP
            </span>
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
                  {getCartItemsCount()}
                </span>
              </div>
            </a>

            {displayLoginOptions()}




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