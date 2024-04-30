'use client';
import React, { useEffect, useState } from 'react'

const page = () => {

    const [postArray, setPostArray] = useState([]);

    const fetchPostData = () => {

        fetch('http://localhost:5000/post/getall')
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPostArray(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchPostData();
    }, []);




    return (
        <section className="text-gray-600 body-font bg-mate_black dark:bg-primary ">
            <div className='text-center font-Jost text-secondary dark:text-black pt-10'>
                <h1 className='font-bold text-3xl'>My Shop</h1>
                <h3 className='text-1xl'>Home &rsaquo; My Shop</h3>
            </div>
            <div className="grid grid-cols-4  gap-4">
                {
                    postArray.map((post) => {
                        return (
                            <div>
                                    <div className=" ml-6 mx-auto my-7 mt-6 w-80 h-auto  bg-secondary text-slate-600 border border-secondary dark:bg-black dark:text-white dark:border-black   p-4 gap-4 rounded-lg shadow-md">

                                        <div className="lg:w-80 md:w-1/4  w-full">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img
                                                    alt="ecommerce"
                                                    className="object-cover object-center w-72 h-full block"
                                                    src={post.image}
                                                />
                                            </a>
                                            <div className="mt-4 font-Jost w-72 ">
                                                <h2 className="text-gray-900 dark:text-white title-font text-lg font-medium">
                                                    {post.name}
                                                </h2>
                                                <h3 className="text-gray-500 dark:text-white text-sm text-wrap tracking-widest title-font mb-1">
                                                    {post.description}
                                                </h3>
                                                <p className="mt-1">Rs.{post.price}</p>
                                            </div>
                                            <button type="submit" className="flex ml-36  text-white bg-black hover:bg-gray-700 dark:bg-primary dark:text-black dark:font-bold border-0 py-2 px-6 focus:outline-none  rounded">Add to Cart</button>

                                        </div>
                                    </div>

                                
                            </div>



                        )
                    })
                }
            </div>

        </section>

    )
}

export default page