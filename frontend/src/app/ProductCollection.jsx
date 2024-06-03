import Link from 'next/link'
import React from 'react'

const ProductCollection = () => {
  return (
    <section>
      <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-mate_black dark:bg-primary ">
        <header className="text-center font-Jost">
          <h2 className="text-xl font-bold text-secondary  dark:text-black sm:text-3xl " data-aos="fade-up">
            New Collection
          </h2>
          <p className="mx-auto mt-4 max-w-md text-secondary dark:text-black" data-aos="fade-up">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
            natus?
          </p>
        </header>
        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 " data-aos="zoom-in">
          <li>
            <a href="#" className="group relative block">
              <img
                src="capimage2.jpg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Casual Cap</h3>
                <span className="mt-1.5 inline-block bg-black dark:bg-black  dark:text-primary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                <Link href="/MyShop">Shop Now</Link>
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="group relative block">
              <img
                src="capimage3.jpg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Adidas Cap</h3>
                <span className="mt-1.5 inline-block bg-black dark:bg-black dark:text-primary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  <Link href="/MyShop">Shop Now</Link>
                </span>
              </div>
            </a>
          </li>
          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="group relative block">
              <img
                src="capimage4.jpg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Base ball Cap
                </h3>
                <span className="mt-1.5 inline-block bg-black dark:bg-black dark:text-primary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                <Link href="/MyShop">Shop Now</Link>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

  )
}

export default ProductCollection