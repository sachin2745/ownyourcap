import React from 'react'
import Footer from '../Footer'
import Navbar from '../navbar'

const Checkout = () => {
    return (
        <>

            <meta charSet="UTF-8" />
            <link
                href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        * {\n            margin: 0;\n            padding: 0;\n        }\n        fieldset label span {\n            min-width: 125px;\n        }\n        fieldset .select::after {\n            content: '';\n            position: absolute;\n            width: 9px;\n            height: 5px;\n            right: 20px;\n            top: 50%;\n            margin-top: -2px;\n            background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='9' height='5' viewBox='0 0 9 5'><title>Arrow</title><path d='M.552 0H8.45c.58 0 .723.359.324.795L5.228 4.672a.97.97 0 0 1-1.454 0L.228.795C-.174.355-.031 0 .552 0z' fill='%23CFD7DF' fill-rule='evenodd'/></svg>\");\n            pointer-events: none;\n        }\n    "
                }}
            />


            <Navbar />


            <div className="h-full grid grid-cols-3 ">
                <div className="lg:col-span-2 col-span-3 bg-black text-secondary  px-12 p-10">
                    <h1 className=' mb-2  p-2 text-4xl text-secondary font-Jost'>Checkout</h1>
                    <div className="p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                            <div className="text-yellow-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 sm:w-5 h-6 sm:h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="text-sm font-medium ml-3 text-black">Checkout</div>
                        </div>
                        <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                            Complete your shipping and payment details below.
                        </div>
                        <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="rounded-md mt-9 font-Quicksand">
                        <form id="payment-form" method="POST" action="">
                            <section>
                                <h2 className="uppercase tracking-wide text-lg font-semibold text-secondary my-2">
                                    Shipping &amp; Billing Information
                                </h2>

                                <div className=" grid max-w-screen-md gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="first-name"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            First name*
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            className="w-full rounded border bg-black text-white px-3 py-2  outline-none ring-mate_black transition duration-100 focus:ring"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="last-name"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            Last name*
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            className="w-full rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="country"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            Phone Number*
                                        </label>

                                        <input type="number" name="phone" className="w-full rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring" />

                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="email"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            Email*
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="address"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            Address (Area and Street)*
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="w-full h-20 rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="locality"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            Locality*
                                        </label>
                                        <input
                                            type="text"
                                            name="locality"
                                            className="w-full rounded border bg-black text-whitepx-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="City/ District/ Town"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            City/ District/ Town*
                                        </label>

                                        <input type="text" name="city" className="w-full rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring" />


                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="state"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            State*
                                        </label>

                                        <select
                                            name="state"
                                            className="w-full rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring"
                                        >
                                            <option value="AP">Andhra Pradesh</option>
                                            <option value="AP">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="HP">Himachal Pradesh</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="MP"> Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="TN">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="UP" selected="selected"> Uttar Pradesh </option>

                                        </select>

                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="pincode"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            Pincode*
                                        </label>
                                        <input
                                            type="number"
                                            name="pincode"
                                            className="w-full rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring"
                                        />
                                    </div>

                                    <h2 className="uppercase tracking-wide text-lg font-semibold text-secondary my-2">
                                        Additional Information
                                    </h2>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="landmark"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            Landmark(Optional)
                                        </label>
                                        <textarea
                                            type="text"
                                            name="landmark"
                                            className="h-24 w-full rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring"
                                            defaultValue={""}
                                        />
                                    </div>

                                    <div className="sm:col-span-2 mb-10">
                                        <label
                                            htmlFor="alternativephone"
                                            className="mb-2 inline-block text-sm text-secondary sm:text-base"
                                        >
                                            Alternative Phone(Optional)
                                        </label>
                                        <input
                                            type="number"
                                            name="alternativephone"
                                            className=" w-full rounded border bg-black text-white px-3 py-2  outline-none ring-indigo-300 transition duration-100 focus:ring"

                                        />
                                    </div>
                                </div>

                            </section>
                        </form>
                    </div>

                </div>

                <div className="col-span-1 bg-black lg:block hidden border-solid border-2 border-white font-Jost">
                    <h1 className="py-6  text-xl text-secondary px-8">
                        Order Summary
                    </h1>
                    <ul className="py-6  space-y-6 px-8">
                        <li className="grid grid-cols-6 gap-2 ">
                            <div className="col-span-1 self-center">
                                <img
                                    src="capimage3.jpg"
                                    alt="Product"
                                    className="rounded w-full"
                                />
                            </div>
                            <div className="flex flex-col col-span-3 pt-2">
                                <span className="text-secondary text-md font-semi-bold">
                                    Adidas  Cap
                                </span>
                                <span className="text-gray-400 text-sm inline-block pt-2">
                                    Black
                                </span>
                            </div>
                            <div className="col-span-2 pt-3">
                                <div className="flex items-center space-x-2 text-sm justify-between">
                                    <span className="text-gray-400">2 x ₹199</span>
                                    <span className="text-sky-400 font-semibold inline-block">
                                        ₹398
                                    </span>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <div className="px-8 ">
                        <div className="flex justify-between py-4 text-secondary">
                            <span>Subtotal</span>
                            <span className="font-semibold text-sky-500">₹398/-</span>
                        </div>
                        <div className="flex justify-between py-4 text-secondary">
                            <span>Shipping</span>
                            <span className="font-semibold text-sky-500">₹40/-</span>
                        </div>
                    </div>
                    <div className="font-semibold text-xl px-8 flex justify-between py-8 text-secondary border-b">
                        <span>Total</span>
                        <span>₹438/-</span>
                    </div>

                    {/* component */}
                    <div className=" font-semibold text-lg mt-5 px-8 py-4 text-secondary  ">
                        <input type="checkbox" className="checkbox  checkbox-primary" />
                        <label htmlFor="credit-card" className="ml-3">Credit Card (Stripe)</label>
                    </div>
                    <div className="bg-black border-solid border-2 border-white my-4 shadow p-8 rounded-lg">
                        <div className=" items-center mb-4">

                            <h2 className="text-md"> Pay with your credit card via Stripe.</h2>
                        </div>

                        <div className="w-full">
                            <label htmlFor="payment" className="block text-lg font-bold mb-2">
                                Credit Card
                            </label>
                            <div class="flex items-center justify-between bg-gray-800 overflow-hidden p-1 border border-white border-opacity-30 rounded-lg shadow-md h-9"
                            >
                                <input
                                    className="w-42 h-full border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                                    type="number"
                                    name="text"
                                    id="input"
                                    placeholder="0000 0000 0000 0000"
                                />
                                <div
                                    className="items-center flex justify-center relative w-10 h-6  rounded-md"
                                >
                                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M59 11H5c-1.654 0-3 1.346-3 3v36c0 1.654 1.346 3 3 3h54c1.654 0 3-1.346 3-3V14c0-1.654-1.346-3-3-3z"
                                            fill="#4D4D4D"
                                        />
                                        <path
                                            d="M17 51c-5.24 0-10.279-.683-15-1.928V50c0 1.654 1.346 3 3 3h54c1.654 0 3-1.346 3-3V25.915C55.209 40.563 37.626 51 17 51z"
                                            fill="#3E3E3E"
                                        />
                                        <path d="M2 21h60v10H2z" fill="#3EBBDD" />
                                        <path
                                            d="M6 15h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm39 28h-8a1 1 0 00-1 1v4a1 1 0 001 1h8a1 1 0 001-1v-4a1 1 0 00-1-1zm-12 0h-8a1 1 0 00-1 1v4a1 1 0 001 1h8a1 1 0 001-1v-4a1 1 0 00-1-1zM7 45h15v2H7z"
                                            fill="#FFF"
                                        />
                                    </svg>

                                </div>
                            </div>
                            <div className="flex w-full mt-10 pb-10">
                                <div className='flex-1'>
                                    <label htmlFor="payment" className="block text-lg font-bold mb-2">
                                        Expiry Date
                                    </label>
                                    <input type="number" className="w-11/12 text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2" placeholder="MM / YY" />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="payment" className="block text-lg font-bold mb-2">
                                        Card Code (CVC)*
                                    </label>
                                    <input type="number" className="w-11/12 text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2" placeholder="CVC" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-md px-8 py-8 text-secondary  ">
                            <input type="checkbox" className="checkbox  checkbox-primary" />
                            <label htmlFor="credit-card" className="ml-3">Pay with UPI OR Code</label>
                        </div>
                        <p className="p-8  mb-4 items-center my-4 -mt-10"> Your personal data will be used to process your order, support your experience throughout this website, and for other purpose described in our <a href="/privacy">privacy policy</a> . </p>
                    </div>
                    <div className="p-8">
                        <a href="/thankyou" type="submit" className="btn bg-sky-500 w-full text-lg text-white">
                            Place Order
                        </a>
                    </div>

                </div>

            </div>

            <Footer />

        </>

    )
}

export default Checkout