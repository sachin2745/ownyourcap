'use client'
import ProductCollection from '@/app/ProductCollection'
import Products from '@/app/Products'
import Image from 'next/image'
import React from 'react'

const ViewProductDetails = () => {
    return (
        <div className='container'>

            <div className="text-center mb-10 max-w-[600px] mx-auto font-Jost">
                <h1 data-aos="fade-up" className="mt-10 text-4xl font-bold text-secondary text-gray-950 text-mono">
                    Products
                </h1>

            </div>

            <div className='section-1 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8' >
                <div className='product-img rounded-lg bg-gray-200 p-2' >
                    <Image src='/capimage1.jpg' alt='product image' className='rounded-lg' width={640} height={640} />
                </div>
                <div className='short-description p-10 rounded-lg bg-mate_black lg:col-span-2 font-Jost' >
                    <div className="flex">
                        <h2 className=' flex-1 text-4xl	mb-5' >Solid Sports/Regular Cap</h2>
                        <button className=" flix-1 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg
                                fill="red"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                            </svg>
                        </button>

                    </div>
                    <h2 className='text-lg  ' >₹499/- <span className='text-xs	ml-2' > <del>₹999/-</del> </span> </h2>
                    <h3 className='text-xl font-semibold mt-5 mb-2' >Product Details</h3>
                    <table border-spacing-2 className='mb-5 '  >
                        <tbody>
                            <tr>
                                <td className='font-semibold ' >Fabric</td>
                                <td className='' >Cotton</td>
                            </tr>
                            <tr>
                                <td className='font-semibold' >Color</td>
                                <td className='' >Red</td>
                            </tr>
                            <tr>
                                <td className='font-semibold' >Size</td>
                                <td className='' >Free Size</td>
                            </tr>
                            <tr>
                                <td className='font-semibold' >Style code</td>
                                <td className='' >CVX-200</td>
                            </tr>
                            <tr>
                                <td className='font-semibold'>Net Quantity</td>
                                <td className='' >1</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-start">
                        <a href="/viewCart" type="submit"
                         className= "mr-6 inline-block px-8 py-3 bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative  rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span className=" bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                            Add to Cart
                        </a>

                        <a href="/Checkout" type="submit"
                         className= "inline-block px-8 py-3 bg-sky-500 text-black border border-slate-400 border-b-4 font-medium overflow-hidden relative  rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                           Buy Now
                        </a>                       

                    </div>
                    <h5 className='text-gray mt-4' >Vector X is one of the established sports brands who provide stylish and innovative sports gear to most of
                        the aspiring sport players as well as others. As a brand they have produced thousands of spectacular gear
                        which have been used by numerous renowned.</h5>
                </div>
            </div>

            <div className='section-2' >
                <div className='long-description p-10' >
                    <h3 className='text-xl font-semibold mt-5 mb-2' >Description</h3>
                    <h5>Embark on an immersive journey into the world of web development with our comprehensive Web Development Bootcamp.
                        Designed for both beginners and those looking to enhance their skills, this intensive program covers a broad
                        spectrum of topics, including HTML, CSS, JavaScript, and more. Led by industry experts, you’ll engage in hands-on
                        projects, receive personalized feedback, and gain real-world experience to confidently create dynamic and
                        responsive websites. Whether you’re aspiring to become a web developer or seeking to upgrade your current skills,
                        our Bootcamp provides the knowledge and practical experience needed to succeed in the ever-evolving field of web
                        development.</h5>
                    <h3 className='text-xl font-semibold mt-10 mb-2' >Reviews</h3>
                    <h5>There are no reviews yet.</h5>
                    <h3 className='text-xl font-semibold mt-10 mb-2' >Add your comments</h3>
                    <h5>
                        <span >Your rating * * * * * </span>
                        <textarea className='w-full h-32 p-2 rounded-lg bg-gray-200 mt-2' placeholder='Add your comments here' ></textarea>
                        <button type="submit" className='mt-2' >Submit</button>
                    </h5>
                </div>
            </div>

            <div className='section-3' >
                <div className='related-products mt-10 ' >

                    <Products />

                </div>
            </div>

        </div>
    )
}

export default ViewProductDetails