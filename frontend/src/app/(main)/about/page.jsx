import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'
import Link from 'next/link'

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
      {/* our story */}
      <section>
        <div className="bg-mate_black py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div className="h-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
                  <img
                    src="ourstory.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:pt-16">

                <h1 className="mb-4 text-center text-2xl font-bold font-Quicksand text-primary sm:text-4xl md:mb-6 md:text-left">
                  Our Story
                </h1>
                <p className="mb-6 text-white sm:text-xl md:mb-8 font-Jost">
                  Founded in 2024, Own Your Cap was born out of a passion for headwear and a desire to bring high-quality,
                  personalized caps to people everywhere. What started as a small venture has grown into a thriving community
                  of cap enthusiasts who share our love for craftsmanship, creativity, and style.
                </p>

              </div>
            </div>
          </div>
        </div>

      </section>
      {/* our mission */}
      <section>
        <div className="bg-mate_black py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">

              <div className="md:pt-16">

                <h1 className="mb-4 text-center text-2xl font-extrabold font-Quicksand text-primary sm:text-4xl md:mb-6 md:text-left">
                  Our Mission
                </h1>
                <p className="mb-6 text-white sm:text-xl md:mb-8 font-Jost">
                  Our mission is simple: to provide you with the best caps that reflect your individuality and taste.
                  We are dedicated to offering a wide range of designs,
                  materials, and customization options to ensure that your cap is truly your own.
                </p>

              </div>
              <div>
                <div className="h-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
                  <img
                    src="ourmission.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="h-full w-full object-cover  object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section>
        <div className="bg-mate_black py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-extrabold text-primary md:mb-6 lg:text-4xl font-Quicksand">
                Why Choose Us?
              </h2>

            </div>
            {/* text - end */}
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              {/* article - start */}
              <div className="flex flex-col overflow-hidden rounded-lg border bg-mate_black">
                <a
                  href="#"
                  className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                >
                  <img
                    src="quality.jpg"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h2 className="mb-2 text-lg font-semibold text-primary font-Quicksand">
                    <a
                      href="#"
                      className="transition duration-100 hover:text-sky-500 active:text-sky-600"
                    >
                      Quality Craftsmanship
                    </a>
                  </h2>
                  <p className="mb-8 text-white font-Jost">
                    Each cap is meticulously crafted using premium materials to ensure durability and comfort.
                  </p>

                </div>
              </div>
              {/* article - end */}
              {/* article - start */}
              <div className="flex flex-col overflow-hidden rounded-lg border bg-mate_black">
                <a
                  href="#"
                  className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                >
                  <img
                    src="unique.jpg"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h2 className="mb-2 text-lg font-semibold text-primary font-Quicksand">
                    <a
                      href="#"
                      className="transition duration-100 hover:text-sky-500 active:text-sky-600"
                    >
                      Unique Designs
                    </a>
                  </h2>
                  <p className="mb-8 text-white font-Jost">
                    From classic styles to the latest trends, our collection features a diverse array of designs to suit any preference.
                  </p>

                </div>
              </div>
              {/* article - end */}
              {/* article - start */}
              <div className="flex flex-col overflow-hidden rounded-lg border bg-mate_black">
                <a
                  href="#"
                  className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                >
                  <img
                    src="customization.jpg"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h2 className="mb-2 text-lg font-semibold text-primary font-Quicksand">
                    <a
                      href="#"
                      className="transition duration-100 hover:text-sky-500 active:text-sky-600"
                    >
                      Customization Options
                    </a>
                  </h2>
                  <p className="mb-8 text-white font-Jost">
                    Personalize your cap with our easy-to-use customization tools. Add your name, a special date, or a unique design to make it one-of-a-kind.
                  </p>

                </div>
              </div>
              {/* article - end */}
              {/* article - start */}
              <div className="flex flex-col overflow-hidden rounded-lg border bg-mate_black">
                <a
                  href="#"
                  className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                >
                  <img
                    src="satisfaction.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h2 className="mb-2 text-lg font-semibold text-primary font-Quicksand">
                    <a
                      href="#"
                      className="transition duration-100 hover:text-sky-500 active:text-sky-600"
                    >
                      Customer Satisfaction
                    </a>
                  </h2>
                  <p className="mb-8 text-white font-Jost">
                    Your satisfaction is our top priority. Our friendly and responsive customer service team is here to assist you with any questions or concerns.
                  </p>

                </div>
              </div>
              {/* article - end */}
            </div>
          </div>
        </div>

      </section>

      {/* our collection */}
      <section>
        <div className="bg-mate_black py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* text - start */}
            <div className=" md:mb-6">
              <h2 className="mb-4 text-center text-2xl font-extrabold text-primary md:mb-6 lg:text-4xl font-Quicksand">
                Our Collection
              </h2>
              <p class="mx-auto max-w-screen-md text-center text-white md:text-2xl font-Quicksand">
                Explore our extensive collection of caps, including:
              </p>
            </div>
            <div className="bg-mate_black py-6 sm:py-8 lg:py-12 ">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                <div className="font-Quicksand mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
                  {/* image - start */}
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="capcarosel.jpg"
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      The perfect blend of style and comfort.
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="capcollection.jpg"
                      loading="lazy"
                      alt="Photo by Magicle"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      Casual and trendy, ideal for everyday wear.
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="capcollection2.jpg"
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      Keep warm with our cozy and stylish beanies.
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="capcollection4.jpg"
                      loading="lazy"
                      alt="Photo by Lorenzo Herrera"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      Design your own cap to match your unique style.
                    </span>
                  </a>
                  {/* image - end */}
                </div>

              </div>
            </div>


          </div>
        </div>

      </section>

      {/* contact us */}
      <section>
        <div className="bg-mate_black py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-mate_black sm:flex-row md:h-96">
              {/* image - start */}
              <div className="order-first h-48 w-full  bg-mate_black sm:order-none sm:h-auto sm:w-1/2 lg:w-2/4">
                <img
                  src="contact.jpg"
                  loading="lazy"
                  alt="Photo by Andras Vas"
                  className="h-full w-full"
                />
              </div>
              {/* image - end */}
              {/* content - start */}
              <div className="flex w-full  flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                <h2 className="mb-5 text-xl font-extrabold text-primary font-Quicksand md:text-2xl lg:text-4xl">
                  Help center
                </h2>
                <p className="mb-6 max-w-xl text-white font-Jost text-xl">
                  Have questions or need assistance?<br />
                  We&apos;re here to help! Reach out to us at ownyourcap@gmail.com or call us at 1284785478.<br/> You can also visit our Contact Us page for more information.
                  <br />
                </p>
                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-sky-400 focus-visible:ring active:bg-sky-400 md:text-base"
                  >
                    Contact support
                  </Link>
                </div>

              </div>
              {/* content - end */}
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default About