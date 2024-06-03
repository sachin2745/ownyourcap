"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { IconShoppingCartX } from '@tabler/icons-react';
import useVoiceContext from '@/context/VoiceContext';
import useProductContext from '@/context/ProductContext';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import pluralize from 'pluralize';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';

const CartPage = () => {

    const { id } = useParams();

    const send = (e) => {
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }
    const [productList, setproductList] = useState([]);
    const router = useRouter();
    const [masterList, setMasterList] = useState([]);


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
        if (finalTranscript.includes('clear cart') || finalTranscript.includes('clear card')) {
            const post = pluralize.singular(finalTranscript.split(' ').at(-1));
            // console.log((product), product);
            searchProduct(post);
            resetTranscript();
            voiceResponse(`Cart has been cleared`);
            triggerModal(
                `Cart has been cleared`,
                '',
                true,
                <IconShoppingCartX size={50} />
            );
        }

        else if (finalTranscript.includes('checkout') || finalTranscript.includes('check out')) {
            resetTranscript();
            router.push('/checkout');
            voiceResponse(`Proceeding to checkout`);
            triggerModal(
                `Proceeding to checkout`,
                '',
                true,
                <IconShoppingCartX size={50} />
            );
        }
        else if (finalTranscript.includes('continue shopping')) {
            resetTranscript();
            router.push('/MyShop');
            voiceResponse(`Continuing shopping`);
            triggerModal(
                `Continuing shopping`,
                '',
                true,
                <IconShoppingCartX size={50} />
            );
        }
        //process to pay goes to checkout page
        else if (finalTranscript.includes('process to pay')) {
            resetTranscript();
            router.push('/checkout');
            voiceResponse(`Proceeding to checkout`);
            triggerModal(
                `Proceeding to checkout`,
                '',
                true,
                <IconShoppingCartX size={50} />
            );
        }


    }, [finalTranscript])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/post/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setproductList(data);
            setMasterList(data);

        }
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    const searchProduct = (query) => {
        const filteredProduct = masterList.filter(post => post.name.toLowerCase().includes(query.toLowerCase()));
        setproductList(filteredProduct);
    }


    const { setCartOpen } = useProductContext();
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

    const displayCartItems = () => {
        if (getCartItemsCount() === 0) return (
            <div className="text-center font-Jost ">
                {/* <p alt="login form" className='rounded-start mt-4 w-25 text-center' /> */}
                <h3>Your Cart is Currently Empty!</h3>
                <p className="text-muted">Before proceed to checkout you must add some products to your shopping cart. <br />You will fill a lot of interesting products on our "Product" page.</p>
                <Link className=" mt-10 btn rounded-pill" onClick={() => setCartOpen(false)} style={{ backgroundColor: " rgb(14 165 233)", color: "#fff" }} href={"/MyShop"}>Return To Shop</Link>
            </div>
        );
        return cartItems.map((item) => (
            <div key={item._id} className="grid grid-cols-3 mb-4  font-Jost">
                <div className="">
                    <img src={'http://localhost:5000/' + item.image} alt="" className="w-auto mx-auto  h-24  py-1 " style={{ objectFit: "cover" }} />

                </div>
                <div className="">
                    <p className="text-muted h6">{item.name}</p>
                    {/* <h3>{item.title}</h3> */}
                    <p className="text-muted">Color:{item.color}</p>
                </div>
                <div className="">
                    <div className="input-group flex">
                        <button className="bg-primary rounded text-xl text-black  px-3 py-2" onClick={e => addItemToCart(item)}><FaPlus /> </button>
                        <input type="text" className=" w-12 px-2 text-center text-black" value={item.quantity} />
                        <button className="bg-primary rounded text-xl text-black px-3 py-2" onClick={e => removeItemFromCart(item)}><FaMinus /></button>

                    </div>
                    <h2 className="my-2"> ₹{getSingleItemCartTotal(item)}</h2>
                </div>
            </div>
        ));
    }
    const shippingPrice = 40;
    return (
        <>


            <div
                className="relative z-50"
                aria-labelledby="slide-over-title"
                role="dialog"
                aria-modal="true"
            >


                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-mate_black shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2
                                                className="text-lg font-bold text-primary font-Jost"
                                                id="slide-over-title"
                                            >
                                                Shopping cart
                                            </h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setCartOpen(false)}
                                                    className="relative -m-2 p-2  text-gray-400 hover:text-gray-500"
                                                >
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <svg
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-400">
                                                    <li className="flex py-6">
                                                        <div className=" flex flex-1 flex-col">
                                                            {displayCartItems()}
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6 font-Jost">
                                        <div className="flex justify-between text-base font-medium text-white">
                                            <p>Total: {getCartTotal() + shippingPrice}</p>
                                            <p>Items: {getCartItemsCount()}</p>
                                        </div>

                                        <button className="bg-red-600 w-full hover:bg-red-700 rounded py-1 text-white" onClick={() => clearCart()}> Clear Cart</button>
                                        <Link href='/checkout'>
                                            <button className="bg-sky-500 text-white mt-2 hover:bg-sky-600 w-full py-1 rounded" onClick={() => setCartOpen(false)} >
                                                Procees to Pay
                                            </button></Link>
                                        <div className="mt-6 flex flex-col justify-center text-center text-sm text-white">
                                            <p>
                                                or

                                            </p>
                                            <a onClick={() => setCartOpen(false)}
                                                href={"/MyShop"}
                                                type="button"
                                                className="font-medium text-sky-500 hover:text-indigo-400"
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> →</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default CartPage