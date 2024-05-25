'use client';
import React, { useEffect, useRef, useState } from 'react';
// import Navbar from './Navbar';
import { useSearchParams } from 'next/navigation';
import useProductContext from '@/context/ProductContext';
// import useCartContext from '../Context/CartContext';
import { CiCircleCheck } from "react-icons/ci";
import Link from 'next/link';
import Navbar from '../navbar';
import { MdOutlineSmsFailed } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const thankYou = () => {
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

    const [paymentData, setPaymentData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPaymentHistory = async () => {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/getbyuser`, {
            headers: {
                'x-auth-token': (JSON.parse(sessionStorage.getItem('user')))
            }
        });
        const data = await response.json();
        console.log(data);
        setPaymentData(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchPaymentHistory();
    }, []);

    return (
        <>
            <Navbar />

            <section className="py-40 relative bg-mate_black h-screen ">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto ">
                    <div>
                        {
                            params.get('redirect_status') === 'succeeded' ?
                                <>
                                    <div className="flex justify-center  font-manrope font-bold text-6xl leading-10 font-Quicksand text-secondary items-center content-center">
                                        <GiConfirmed className='text-sky-500 mb-5 ' />
                                    </div>
                                    <h2 className="font-manrope font-bold text-4xl leading-10 font-Quicksand text-secondary text-center">
                                        Payment Successful
                                    </h2>
                                    <p className="mt-4 font-normal text-lg leading-8 text-secondary font-Quicksand mb-1 text-center">
                                        Your order has been placed successfully.
                                    </p>
                                    <p className=" font-normal text-lg leading-8 text-secondary font-Quicksand mb-11 text-center">
                                        We've sent a confirmation email to your email address.
                                    </p>
                                    <Link href="/order" className="flex justify-center font-manrope font-bold text-2xl leading-10 font-Quicksand text-secondary items-center content-center">
                                        Check Order History
                                    </Link>
                                </>
                                :
                                <>
                                    <div className="flex justify-center  font-manrope font-bold text-6xl leading-10 font-Quicksand text-secondary items-center content-center">
                                        <MdOutlineSmsFailed className='text-red-500 mb-5 ' />
                                    </div>
                                    <h2 className="font-manrope font-bold text-4xl leading-10 font-Quicksand text-secondary text-center">
                                        Payment Failed
                                    </h2>
                                    <p className="mt-4 font-normal text-lg leading-8 text-secondary font-Quicksand mb-1 text-center">
                                        Your payment was not successful. Please try again.
                                    </p>
                                    <p className=" font-normal text-lg leading-8 text-secondary font-Quicksand mb-11 text-center">
                                        If the problem persists, please contact us.
                                    </p>
                                    <Link href="/" className="flex justify-center font-manrope font-bold text-2xl leading-10 font-Quicksand text-secondary items-center content-center">
                                        Go to Home
                                    </Link>
                                </>
                        }
                    </div>
                    
                </div>
            </section>

        </>
    )
}

export default thankYou;



