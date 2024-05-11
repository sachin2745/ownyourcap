'use client';
import React from 'react'

const sidebar = () => {
    return (
        <aside
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-mate_black border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidenav"
            id="drawer-navigation"
        >
            <div className="overflow-y-auto py-5 px-3 h-full bg-mate_black dark:bg-gray-800">
                <form action="#" method="GET" className="md:hidden mb-2">
                    <label htmlFor="sidebar-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-white dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="search"
                            id="sidebar-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Search"
                        />
                    </div>
                </form>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="/admin/dashboard"
                            className="flex items-center p-2 text-base font-medium text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            <span className="ml-3 ">
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/admin/uploadproducts"
                            className="flex items-center p-2 text-base font-medium text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            <span className="ml-3 ">
                                Upload Products
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/admin/feedback"
                            className="flex items-center p-2 text-base font-medium text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                Inbox
                            </span>
                            <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                                4
                            </span>
                        </a>
                    </li>


                    <li className="hs-dropdown">
                        <button
                            id="hs-dropdown-default"
                            type="button"
                            className="hs-dropdown-toggle flex items-center p-2 w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-gray-600 dark:text-white dark:hover:bg-gray-600"
                            aria-controls="dropdown-sales"
                            data-collapse-toggle="dropdown-sales"
                        >
                            <svg
                                aria-hidden="true"
                                className=" flex-shrink-0 w-6 h-6 text-text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                E-Commerce
                            </span>
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 hs-dropdown-open:rotate-180"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <ul className="hs-dropdown-menu   py-2 space-y-2 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-mate_black shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
                            <li>
                                <a href="/admin/manageproduct"
                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                                    Product
                                </a>
                            </li>
                            <li>
                                <a href="/admin/billing"
                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" >
                                    Billing
                                </a>
                            </li>
                            <li>
                                <a href="/admin/invoice"
                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" >
                                    Invoice
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li className="hs-dropdown">
                        <button
                            id="hs-dropdown-default"
                            type="button"
                            className="hs-dropdown-toggle flex items-center p-2 w-full text-base font-medium text-white rounded-lg transition duration-75 group hover:bg-gray-600 dark:text-white dark:hover:bg-gray-600"
                            aria-controls="dropdown-sales"
                            data-collapse-toggle="dropdown-sales"
                        >
                            <svg
                                aria-hidden="true"
                                className=" flex-shrink-0 w-6 h-6 text-text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                Users
                            </span>
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 hs-dropdown-open:rotate-180"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <ul className="hs-dropdown-menu   py-2 space-y-2 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-mate_black shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
                            <li>
                                <a href="/admin/manageuser"
                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                                    User List
                                </a>
                            </li>
                            <li>
                                <a href="/admin/profile"
                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" >
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href="/admin/setting"
                                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" >
                                    Setting
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>
                <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-medium text-white rounded-lg transition duration-75 hover:bg-gray-600 dark:hover:bg-gray-600 dark:text-white group"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="ml-3">Docs</span>
                        </a>
                    </li>

                </ul>
            </div>

        </aside>
    )
}

export default sidebar