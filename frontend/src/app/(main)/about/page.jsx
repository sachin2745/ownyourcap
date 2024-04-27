import React from 'react'

const About = () => {
  return (
    <section className="bg-indigo-400 dark:bg-primary border-b-4 border-white dark:border-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="capabout.jpg"
              className="absolute inset-0 h-600  w-full object-cover"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="font-bold font-mono text-black sm:text-5xl">About Us</h2>
            <p className="mt-4 text-black text-lg">
              At our online emporium of caps and hats, we're not just about style; we're about making a statement. With a diverse collection curated to cater to every taste and occasion, we blend quality craftsmanship with contemporary trends. Whether you're seeking a classic snapback, a cozy beanie for chilly days, or a sleek fedora to elevate your ensemble, we've got you covered.
            </p>
           
            <button class= "mt-10 cursor-pointer py-1 px-5 rounded-md bg-gray-950 text-white border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About