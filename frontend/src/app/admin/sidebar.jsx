'use client';
import React from 'react'

const sidebar = () => {
    return (
        <aside
            className="fixed top-0 left-0 z-40 w-60 h-screen pt-14 transition-transform -translate-x-full bg-mate_black border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidenav"
            id="drawer-navigation"
        >
            <>
                <div
                    id="docs-sidebar"
                    className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-60 bg-mate_black border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700"
                >
                    <div className="px-6">
                        <a
                            className="flex-none text-xl font-semibold dark:text-white"
                            href="#"
                            aria-label="Brand"
                        >
                            Brand
                        </a>
                    </div>
                    <nav
                        className="hs-accordion-group p-6  w-full flex flex-col flex-wrap"
                        data-hs-accordion-always-open=""
                    >
                        <ul className="space-y-1.5">
                            <li>
                                <a
                                    className="flex items-center gap-x-3.5 py-2 px-2.5   text-base font-medium text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-700 dark:text-white"
                                    href="/admin/dashboard"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    className="flex items-center gap-x-3.5 py-2 px-2.5   text-base font-medium text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-700 dark:text-white"
                                    href="/admin/uploadproducts"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-white transition duration-75 dark:text-white group-hover:text-white dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    Upload Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/admin/feedback"
                                    className="flex items-center  gap-x-3.5  py-2 px-2.5  text-base font-medium text-white rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                    </svg>
                                    <span className="flex-1 whitespace-nowrap">
                                        Inbox
                                    </span>
                                    <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                                        4
                                    </span>
                                </a>
                            </li>
                            <li className="hs-accordion" id="account-accordion">
                                <button
                                    type="button"
                                    className="hs-accordion-toggle hs-accordion-active:text-cyan-400 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className=" flex-shrink-0 w-5 h-5 text-text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white"
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
                                    E-Commerce
                                    <svg
                                        className="hs-accordion-active:block ms-auto hidden size-4 text-white group-hover:text-gray-500 dark:text-neutral-400"
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
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:hidden ms-auto block size-4 text-white group-hover:text-gray-500 dark:text-neutral-400"
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
                                    id="account-accordion"
                                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                >
                                    <ul className="pt-2 ps-2">
                                        <li>
                                            <a
                                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                                                href="/admin/manageproduct"
                                            >
                                                Product
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                                                href="/admin/billing"
                                            >
                                                Billing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                                                href="/admin/invoice"
                                            >
                                                Invoice
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="hs-accordion" id="account-accordion">
                                <button
                                    type="button"
                                    className="hs-accordion-toggle hs-accordion-active:text-cyan-400 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className=" flex-shrink-0 w-5 h-5 text-text-white transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white"
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
                                    Users
                                    <svg
                                        className="hs-accordion-active:block ms-auto hidden size-4 text-white group-hover:text-gray-500 dark:text-neutral-400"
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
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:hidden ms-auto block size-4 text-white group-hover:text-gray-500 dark:text-neutral-400"
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
                                    id="account-accordion"
                                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                >
                                    <ul className="pt-2 ps-2">
                                        <li>
                                            <a
                                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                                                href="/admin/manageuser"
                                            >
                                                User List
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                                                href="/admin/profile"
                                            >
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-gray-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                                                href="/admin/setting"
                                            >
                                                Setting
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* End Sidebar */}
            </>



        </aside>
    )
}

export default sidebar