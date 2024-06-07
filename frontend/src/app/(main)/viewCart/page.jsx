'use client'
import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'
import useProductContext from '@/context/ProductContext'
import Link from 'next/link'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { FaRegMinusSquare } from 'react-icons/fa'

const ViewCart = () => {

    const {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        isInCart,
        getCartTotal,
        getCartItemsCount,
        removeoneitem,
        getSingleItemCartTotal
    } = useProductContext();

    const displaycartItems = () => {
        if (getCartItemsCount() === 0) {
            return (
                <div className="grid  bg-secondary w-full h-40 rounded-lg justify-center place-content-center justify-items-center items-center">
                    <h1 className="text-3xl font-bold font-Jost text-black ">Cart is Empty</h1>
                    <h3 className="text-lg font-semibold font-Jost text-black ">Looks like you haven't added anything to your cart yet</h3>
                </div>
            )
        } else {
            return (
                cartItems.map((item) => {
                    return (
                        <div class="flex flex-wrap gap-x-4 bg-gray-300 dark:bg-white overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
                            <a href="#" class="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-72 sm:w-48">
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/` + item.image} loading="lazy" alt="Photo by Thái An" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div class="flex flex-1 flex-col justify-between py-4 ">
                                <div>
                                    <a href="#" class="mb-1 inline-block text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl">
                                        {item.name}
                                    </a>
                                    <span class="block text-perfect_blue mb-2"> {item.category}</span>
                                    <span class="block text-black mb-1"> {item.shortdescription}</span>
                                    <span class="block text-black mb-1">Size: {item.size}</span>
                                    <span class="block text-black">Color: {item.color}</span>
                                </div>

                                <div>
                                    <span class="mb-1 block font-bold text-black md:text-lg">₹{item.price}/-</span>

                                    <span class="flex items-center gap-1 text-sm text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        In stock
                                    </span>
                                </div>
                            </div>

                            <div class="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                                <div class="flex flex-col items-start gap-2">
                                    <div class="flex h-12 w-20 overflow-hidden rounded border">
                                        <input type="text" value={item.quantity} class="w-full text-black px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring" />

                                        <div class="flex flex-col divide-y border-l">
                                            <button onClick={e => addItemToCart(item)} className=" flex w-6 flex-1 select-none  items-center justify-center bg-white text-black leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"><FaPlus /></button>
                                            <button onClick={e => removeItemFromCart(item)} class="flex w-6 flex-1 select-none items-center justify-center bg-white text-black leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"><FaMinus /></button>
                                        </div>
                                    </div>

                                    <button onClick={() => removeoneitem(item)} class="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Delete</button>
                                </div>

                                <div class="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
                                    <span class="block font-bold text-black md:text-lg">₹{getSingleItemCartTotal(item)}/-</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }

    }

    const shippingPrice = 40;


    return (
        <>
            <Navbar />

            <div class="bg-black dark:bg-primary py-6 sm:py-8 lg:py-12 font-Jost ">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="mb-6 sm:mb-10 lg:mb-16 text-center">
                        <a href='/MyShop' class="mb-4 text-center h-1 text-2xl font-bold text-white dark:text-black md:mb-6 lg:text-3xl">Your Cart</a>
                    </div>

                    <div class="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
                        {/* <!-- product - start --> */}
                        {displaycartItems()}
                        {/* <!-- product - end --> */}


                    </div>
                    {/* clear cart */}
                    <div class="flex justify-between">
                        <div class=" ">

                            <button onClick={() => clearCart()}  className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">
                                Clear Cart
                            </button>
                        </div>
                        {/* <!-- totals - start --> */}
                        <div class="mb-20 ">
                            <div class="w-72 rounded-lg bg-secondary p-4 ">
                                <div class="space-y-1">
                                    <div class="flex justify-between gap-4 text-gray-500">
                                        <span>Subtotal</span>
                                        <span>₹{getCartTotal()}/-</span>
                                    </div>

                                    <div class="flex justify-between gap-4 text-gray-500">
                                        <span>Shipping</span>
                                        <span>₹40/-</span>
                                    </div>
                                </div>

                                <div class="mt-4 border-t pt-4">
                                    <div class="flex items-start justify-between gap-4 text-black">
                                        <span class="text-lg font-bold">Total</span>

                                        <span class="flex flex-col items-end">
                                            <span class="text-lg font-bold">₹{getCartTotal() + shippingPrice}</span>
                                            <span class="text-sm text-gray-500">including VAT</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/checkout" class="inline-block mt-5 ml-36 rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                Check out
                            </Link>
                        </div>
                    </div>
                    {/* <!-- totals - end --> */}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ViewCart