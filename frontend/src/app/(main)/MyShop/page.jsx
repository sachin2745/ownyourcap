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
        <section className="text-gray-600 body-font bg-primary">
            <div className='text-center font-Quicksand text-black pt-10'>
                <h1 className='font-bold text-3xl'>My Shop</h1>
                <h3 className='text-1xl'>Home &rsaquo; My Shop</h3>
            </div>
            <div className="container px-5 py-24 mx-auto">
                {
                    postArray.map((post) =>
                        <div key={post._id} 
                         className=" mt-6 w-80  bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300  j p-4 gap-4 rounded-lg shadow-md">
                        
                            <div className="lg:w-80 md:w-1/4  w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-72 h-full block"
                                        src={post.image}
                                    />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                    {post.name}
                                    </h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        {post.description}
                                    </h3>
                                    <p className="mt-1">Rs.{post.price}</p>
                                    <button type="submit" className="flex ml-36 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded">Add to Cart</button>
                                </div>
                            </div>                           
                        </div>)
                }
            </div>
        </section>

    )
}

export default page