import React from 'react'

const About = () => {
  return (
    <section className="bg-primary/90 dark:bg-primary ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="shopping.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-3xl font-mono text-black sm:text-4xl">About Us</h2>
            <p className="mt-4 text-white">
              At our online emporium of caps and hats, we're not just about style; we're about making a statement. With a diverse collection curated to cater to every taste and occasion, we blend quality craftsmanship with contemporary trends. Whether you're seeking a classic snapback, a cozy beanie for chilly days, or a sleek fedora to elevate your ensemble, we've got you covered.
            </p>
            <a
              href="#"
              className="btn btn-active btn-neutral mt-8 inline-block rounded px-12 py-3 text-sm font-medium text-white transition hover:bg-grey focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About