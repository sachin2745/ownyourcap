'use client';
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar';
import Footer from '../Footer';
import useProductContext from '@/context/ProductContext';
import useVoiceContext from '@/context/VoiceContext';
import { IconShoppingCart } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const page = () => {

    const { addItemToCart, isInCart } = useProductContext();
    const router = useRouter();
    const [masterList, setMasterList] = useState([]);
    const [postArray, setPostArray] = useState([]);

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
        checkExistenceInTranscript
    } = useVoiceContext();

    useEffect(() => {
        if (finalTranscript.includes('show me some ')) {
            const post = pluralize.singular(finalTranscript.split(' ').at(-1));
            // console.log((product), product);
            searchProduct(post);
            resetTranscript();
            voiceResponse(`Here are some ${post}s for you`);
            triggerModal(
                `Here are some ${post} for you`,
                'Please ask or select the product you want to buy',
                true,
                <IconShoppingCart size={50} />
            );
        }
        else if (finalTranscript.includes('search product') || finalTranscript.includes('browse product')) {
            const post = pluralize.singular(finalTranscript.split(' ').slice(2).join(' '));
            // console.log((product), product);
            searchProduct(post);
            resetTranscript();
            voiceResponse(`Here is your ${post}`);
            triggerModal(
                `Here is your ${post}`,
                'Please ask or select the product you want to buy',
                true,
                <IconShoppingCart size={50} />
            );
        }
        else if (finalTranscript.includes('View Product number '.toLowerCase()) || finalTranscript.includes('Open Product number '.toLowerCase())) {
            console.log(finalTranscript);
            const post = parseInt(finalTranscript.split(' ').at(-1));
            // console.log((product), product);
            resetTranscript();
            router.push(`/viewProduct/${postArray[post - 1]._id}`);
        }
    }, [finalTranscript])


    const fetchPostData = () => {

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/getall`)
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPostArray(data);
                setMasterList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchPostData();
    }, []);

    const searchProduct = (query) => {
        const filteredProduct = masterList.filter(post => post.name.toLowerCase().includes(query.toLowerCase()));
        setPostArray(filteredProduct);
      }


    return (
        <>
            <Navbar />

            <section className="text-gray-600 body-font bg-mate_black dark:bg-primary ">
                <div className='text-center font-Jost text-secondary dark:text-black pt-10'>
                    <h1 className='font-bold text-3xl'>My Shop</h1>
                    <h3 className='text-1xl'>Home &rsaquo; My Shop</h3>
                </div>
                <div className="grid grid-cols-4  gap-4">
                    {
                        postArray.map((post, index) => {
                            return (
                                <div>
                                    <div className=" ml-6 mx-auto my-7 mt-6 w-80 h-auto  bg-white text-slate-600 border border-secondary dark:bg-black dark:text-white dark:border-black   p-4 gap-4 rounded-lg shadow-md">

                                        <div className="lg:w-72 md:w-1/4  w-full">
                                            <Link href={"/viewProduct/" + post._id}
                                                className="block relative h-48 rounded overflow-hidden">
                                                <img
                                                    alt="ecommerce"
                                                    className="object-cover object-center w-full h-full block"
                                                    src={"http://localhost:5000/" + post.image}
                                                />
                                                <span className="absolute top-0 left-0 m-2 rounded-md bg-black px-2 text-center text-sm font-medium text-white">
                                                    Product No. {index + 1}
                                                </span>
                                            </Link>
                                            <div className="mt-4 font-Jost w-72 ">
                                                <h2 className="text-gray-900 dark:text-white title-font text-lg font-medium">
                                                    {post.name}
                                                </h2>
                                                <h3 className="text-gray-500 dark:text-white text-[13px] text-wrap tracking-widest title-font mb-1">
                                                    {post.category}
                                                </h3>
                                                <p className="mt-3 ">₹{post.price}/-</p>

                                            </div>
                                            <button
                                                disabled={isInCart(post)}
                                                onClick={(e) => addItemToCart(post)}
                                                type="submit"
                                                className="flex-1 w-72 py-2 mt-4 text-center text-white bg-black hover:bg-gray-700 dark:bg-primary dark:text-black dark:font-bold border-0  focus:outline-none  rounded">
                                                <span>{isInCart(post) ? "Added" : "Add to cart"}</span>
                                            </button>

                                        </div>
                                    </div>


                                </div>



                            )
                        })
                    }
                </div>

            </section>

            <Footer />
        </>
    )
}

export default page