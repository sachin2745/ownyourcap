// import React from 'react'
// import Navbar from '../navbar'

// const thankYou = () => {
//     return (
//         <>
//             {/* <Navbar /> */}

//             {/* <section className="py-20 relative bg-mate_black ">
//                 <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto ">
//                     <h2 className="font-manrope font-bold text-4xl leading-10 font-Quicksand text-secondary text-center">
//                         Payment Successful
//                     </h2>
//                     <p className="mt-4 font-normal text-lg leading-8 text-secondary font-Quicksand mb-11 text-center">
//                         Thanks for making a purchase you can check our order summary from below
//                     </p>
//                     <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full font-Jost">
//                         <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
//                             <div className="data">
//                                 <p className="font-semibold text-base leading-7 text-white">
//                                     Order Id:{" "}
//                                     <span className="text-sky-500 font-medium">#10234987</span>
//                                 </p>
//                                 <p className="font-semibold text-base leading-7 text-white mt-4">
//                                     Order Payment :{" "}
//                                     <span className="text-gray-400 font-medium"> 18th march 2021</span>
//                                 </p>
//                             </div>
//                             <button className="rounded-full py-3 px-4 font-semibold text-sm leading-7 text-white bg-sky-500 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-500 hover:shadow-indigo-400">
//                                 Track Your Order
//                             </button>
//                         </div>
//                         <div className="w-full px-3 min-[400px]:px-6">
//                             <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
//                                 <div className="img-box max-lg:w-full">
//                                     <img
//                                         src="capimage3.jpg"
//                                         alt="Adidas cap image"
//                                         className="aspect-square w-full lg:max-w-[140px]"
//                                     />
//                                 </div>
//                                 <div className="flex flex-row items-center w-full ">
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
//                                         <div className="flex items-center">
//                                             <div className="">
//                                                 <h2 className="font-semibold text-xl leading-8 text-white mb-3">
//                                                     Adidas Cap
//                                                 </h2>
//                                                 <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
//                                                    Black
//                                                 </p>
//                                                 <div className="flex items-center ">
//                                                     <p className="font-medium text-base leading-7 text-white pr-4 mr-4 border-r border-gray-200">
//                                                         Size: <span className="text-gray-500">M</span>
//                                                     </p>
//                                                     <p className="font-medium text-base leading-7 text-white ">
//                                                         Qty: <span className="text-gray-500">2</span>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="grid grid-cols-5">
//                                             <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
//                                                 <div className="flex gap-3 lg:block">
//                                                     <p className="font-medium text-sm leading-7 text-white">
//                                                         price
//                                                     </p>
//                                                     <p className="lg:mt-4 font-medium text-sm leading-7 text-sky-600">
//                                                         ₹199/-
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
//                                                 <div className="flex gap-3 lg:block">
//                                                     <p className="font-medium text-sm leading-7 text-white">
//                                                         Status
//                                                     </p>
//                                                     <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
//                                                         Ready for Delivery
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
//                                                 <div className="flex gap-3 lg:block">
//                                                     <p className="font-medium text-sm whitespace-nowrap leading-6 text-white">
//                                                         Expected Delivery Time
//                                                     </p>
//                                                     <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
//                                                         23rd May 2024
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
//                                 <div className="img-box max-lg:w-full">
//                                     <img
//                                         src="capPuma.avif"
//                                         alt="PUMA Men x One8 Core V2 Baseball Cap image"
//                                         className="aspect-square w-full lg:max-w-[140px]"
//                                     />
//                                 </div>
//                                 <div className="flex flex-row items-center w-full ">
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
//                                         <div className="flex items-center">
//                                             <div className="">
//                                                 <h2 className="font-semibold text-xl leading-8 text-white mb-3 ">
//                                                 PUMA Men x One8 Core V2 Baseball Cap
//                                                 </h2>
//                                                 <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
//                                                     White
//                                                 </p>
//                                                 <div className="flex items-center  ">
//                                                     <p className="font-medium text-base leading-7 text-white pr-4 mr-4 border-r border-gray-200">
//                                                         Size: <span className="text-gray-500">Regular</span>
//                                                     </p>
//                                                     <p className="font-medium text-base leading-7 text-white ">
//                                                         Qty: <span className="text-gray-500">1</span>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="grid grid-cols-5">
//                                             <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
//                                                 <div className="flex gap-3 lg:block">
//                                                     <p className="font-medium text-sm leading-7 text-white">
//                                                         price
//                                                     </p>
//                                                     <p className="lg:mt-4 font-medium text-sm leading-7 text-sky-600">
//                                                         ₹450/-
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
//                                                 <div className="flex gap-3 lg:block">
//                                                     <p className="font-medium text-sm leading-7 text-white">
//                                                         Status
//                                                     </p>
//                                                     <p className="font-medium text-sm leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600">
//                                                         Dispatched
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
//                                                 <div className="flex gap-3 lg:block">
//                                                     <p className="font-medium text-sm whitespace-nowrap leading-6 text-white">
//                                                         Expected Delivery Time
//                                                     </p>
//                                                     <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
//                                                         10th May 2024
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
//                             <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
//                                 <button className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-white bg-mate_black transition-all duration-500 hover:text-indigo-600">
//                                     <svg
//                                         className="stroke-white transition-all duration-500 group-hover:stroke-sky-600"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width={22}
//                                         height={22}
//                                         viewBox="0 0 22 22"
//                                         fill="none"
//                                     >
//                                         <path
//                                             d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
//                                             stroke=""
//                                             strokeWidth="1.6"
//                                             strokeLinecap="round"
//                                         />
//                                     </svg>
//                                     Cancel Order
//                                 </button>
//                                 <p className="font-medium text-lg text-secondary pl-6 py-3 max-lg:text-center">
//                                     Paid using Credit Card{" "}
//                                     <span className="text-gray-500">ending with 8822</span>
//                                 </p>
//                             </div>
//                             <p className="font-semibold text-lg text-white py-6">
//                                 Total Price: <span className="text-sky-500"> ₹190.00/-</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}

//         </>
//     )
// }

// export default thankYou
'use client';
import React, { useEffect, useRef, useState } from 'react';
// import Navbar from './Navbar';
import { useSearchParams } from 'next/navigation';
import useProductContext from '@/context/ProductContext';
// import useCartContext from '../Context/CartContext';
import { CiCircleCheck } from "react-icons/ci";
import Link from 'next/link';

const ThankYou = () => {
    const hasRun = useRef(false);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const params = useSearchParams();
    console.log(params);
    const { cartItems, clearCart } = useProductContext();

    const savePayment = async () => {
        const paymentDetails = await retrievePaymentIntent();
        const response = await fetch('http://localhost:5000/order/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: currentUser._id,
                items: cartItems,
                details: paymentDetails,
                intentId: params.get('payment_intent'),
                items: cartItems,
                shipping: JSON.parse(sessionStorage.getItem('shipping'))
            })
        });
        console.log(response.status);
        if (response.status === 200) {
            sessionStorage.removeItem('cartItems');
            sessionStorage.removeItem('shipping');
            clearCart();
        }
    };

    const retrievePaymentIntent = async () => {
        const response = await fetch("http://localhost:5000/retrieve-payment-intent", {
            method: 'POST',
            body: JSON.stringify({ paymentIntentId: params.get('payment_intent') }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.status);
        const data = await response.json();
        // console.log(data);
        return data;
    };

    useEffect(() => {
        if (!hasRun.current) {
            hasRun.current = true;
            if (params.get('redirect_status') === 'succeeded' && sessionStorage.getItem('shipping')) {
                savePayment();
            }
        }
    }, []);

    return (
        <div>
            {/* <Navbar /> */}
            <div fluid="md">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', flexDirection: 'column' }}>
                    {
                        params.get('redirect_status') === 'succeeded' ?
                            <>
                                <CiCircleCheck size={100} color={'green'} />
                                <div style={{ textAlign: 'center', padding: '50px' }}>
                                    <h1 style={{ color: '#4CAF50' }}>Thank You For Your Purchase!</h1>
                                    <p style={{ fontSize: '18px' }}>Your order has been placed successfully.</p>
                                    <p style={{ fontSize: '18px' }}>We've sent a confirmation email to your email address.</p>
                                </div>
                                <Link variant='primary' style={{ marginTop: '20px' }}  href="/order">Go to Home</Link>
                            </>
                            :
                            <>
                                <CiCircleCheck size={100} color={'red'} />
                                <h2>Payment Failed</h2>
                                <p>Your payment was not successful. Please try again.</p>
                                <p>If the problem persists, please contact us.</p>
                                <Link variant='primary' style={{ marginTop: '20px' }}  href="/order">Go to Home</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ThankYou;