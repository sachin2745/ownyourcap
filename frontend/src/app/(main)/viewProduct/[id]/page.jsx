'use client'
import Products from '@/app/Products'
import useProductContext from '@/context/ProductContext';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Navbar from '../../navbar';
import Footer from '../../Footer';
import useVoiceContext from '@/context/VoiceContext';
import { IconShoppingCartCopy } from '@tabler/icons-react';


const ViewProductDetails = () => {

    const { id } = useParams();
    const { addItemToCart, isInCart } = useProductContext();
    const [productList, setProductList] = useState([]);

    const {
        transcript,
        resetTranscript,
        interpretVoiceCommand,
        fillInputUsingVoice,
        performActionUsingVoice,
        finalTranscript,
        voiceResponse,
        voices,
        triggerModal,
        checkExistenceInTranscript,
    } = useVoiceContext();

    useEffect(() => {
        if (
            finalTranscript.includes("add to cart") ||
            finalTranscript.includes("add to card")
        ) {
            voiceResponse(`${productList.name} added to cart`);
            addItemToCart(productList);
            triggerModal(
                "Product added to cart",
                `${productList.name} added to cart`,
                true,
                <IconShoppingCartCopy size={50} />
            );
        }
    }, [finalTranscript]);

    const getProductData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/getbyid/` + id);
        console.log(res.status);

        const data = await res.json();
        setProductList(data);
        console.log(data);
    }

    useEffect(() => {
        getProductData();
    }, [])

    return (
        <>
            <Navbar />

            <div className='container bg-mate_black dark:bg-primary -mt-10'>

                <div className="text-center pt-10 mb-10 max-w-[600px] mx-auto font-Jost">
                    <h1 data-aos="fade-up" className="mt-10 text-4xl font-bold text-secondary dark:text-black text-mono">
                        <a href={"/MyShop"}>Products</a>
                    </h1>

                </div>
                <div>
                    {
                        productList !== null ? (
                            <div className='section-1 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8' >
                                <div className='product-img rounded-lg bg-white p-2 h-full ' >
                                    <img src={"http://localhost:5000/" + productList.image} alt='product image' className='rounded-lg pt-8' width={640} />
                                </div>
                                <div className='short-description p-10 rounded-lg text-white bg-mate_black lg:col-span-2 font-Jost' >
                                    <div className="flex">
                                        <h2 className=' flex-1 text-4xl	mb-5' >{productList.name}</h2>
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
                                    <h2 className='text-lg  ' >₹{productList.price}/- <span className='text-xs	ml-2' > <del>₹999/-</del> </span> </h2>
                                    <h3 className='text-xl font-semibold mt-5 mb-2' >Product Details</h3>
                                    <table border-spacing-2 className='mb-5 table-auto w-52 '  >
                                        <tbody>
                                            <tr>
                                                <td className='font-semibold ' >Fabric</td>
                                                <td className='' >{productList.fabric}</td>
                                            </tr>
                                            <tr>
                                                <td className='font-semibold' >Color</td>
                                                <td className='' >{productList.color}</td>
                                            </tr>
                                            <tr>
                                                <td className='font-semibold' >Size</td>
                                                <td className='' >{productList.size}</td>
                                            </tr>
                                            <tr>
                                                <td className='font-semibold' >Style code</td>
                                                <td className='' >{productList.style}</td>
                                            </tr>
                                            <tr>
                                                <td className='font-semibold'>Net Quantity</td>
                                                <td className='' >1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex justify-start">
                                        <button
                                            disabled={isInCart(productList)} onClick={e => addItemToCart(productList)}

                                            className="mr-6 inline-block px-8 py-3 bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative  rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                            <span className=" bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                                            {isInCart(productList) ? 'Already Added' : 'Add to Cart'}
                                        </button>

                                        <a href="/checkout" type="submit" onClick={e => addItemToCart(productList)}
                                            className="inline-block px-8 py-3 bg-primary text-black border border-slate-300 border-b-4 font-medium overflow-hidden relative  rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                            <span className="bg-primary shadow-primary absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                                            Buy Now
                                        </a>

                                    </div>
                                    <h5 className='text-gray mt-4' >{productList.shortdescription}</h5>
                                </div>
                            </div>

                        ) : (
                            <div>
                                <h1>NO PRODUCT FOUND</h1>
                            </div>
                        )
                    }
                </div>
                <div className='section-2' >
                    <div className='long-description p-10 text-white dark:text-black font-Jost' >
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


                {/* <div className='section-3' >
                    <div className='related-products mt-10 ' >

                        <Products />

                    </div>
                </div> */}

            </div>

            <Footer />
        </>
    )
}

export default ViewProductDetails