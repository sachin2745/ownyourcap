import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'

const About = () => {
  return (
    <>
      <Navbar />

      <section className="text-gray-600 body-font bg-mate_black dark:bg-primary ">
        <div className='text-center font-Jost text-secondary dark:text-black pt-10'>
          <h1 className='font-bold text-3xl'>About </h1>
          <h3 className='text-1xl'>Home &rsaquo; About</h3>
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 pl-20 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-20">
              <h1 className="mb-4  text-4xl font-bold text-white sm:text-5xl md:mb-8 md:text-6xl font-Quicksand">
                Discover your
                <br />
                style online
              </h1>
              <p className="max-w-md leading-relaxed text-gray-300 xl:text-lg font-Jost">
                Welcome to Own Your Cap,<br /> where we believe your style starts at the top.
              </p>
            </div>
            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div className="relative overflow-hidden rounded-lg  shadow-lg  top-[300px] z-10  ">
                <img
                  src="capimage4.jpg"
                  loading="lazy"
                  alt="Photo by Kaung Htet"
                  className="h-auto w-96 object-cover object-center ml-32"
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
                <img
                  src="capbanner2.png"
                  loading="lazy"
                  alt="Photo by Manny Moreno"
                  className="h-[50] w-full object-cover object-center "
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default About