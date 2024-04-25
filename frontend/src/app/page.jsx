'use client'
import React, { useState } from 'react'
import Navbar from './(main)/navbar'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />


      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center ">
          <div className="border pl-[300px] lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 pt-24 py-24 md:mb-0 items-center text-center">
            <h1 className="font-mono title-font sm:text-4xl text-9xl mb-4 font-normal text-white">
              Look stylish with
              <br className="text-9xl" />
              the Best Caps
            </h1>        
           
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-6 -my-20">
            <img
              className="object-cover object-center rounded w-[500px] h-[600px]"
              alt="hero"
              src="hrx.png"
            />
          </div>
        </div>
      </section>

    </>
  )
}

