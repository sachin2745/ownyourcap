'use client'
import React, { useState } from 'react'
import Navbar from './(main)/navbar'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import Footer from './(main)/Footer'
import Products from './Products'
import TopProducts from './TopProducts'
import Banner from './Banner'
import Testimonials from './Testimonial'
import Aos from 'aos'
import "aos/dist/aos.css";
import About from './(main)/about/page'
import Hero from './Hero'
import ProductCollection from './ProductCollection'


export default function Home() {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />    

        <Hero />
        <About />
        <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <ProductCollection/>
        <Testimonials />
        <Footer />
      </>
      )
}

