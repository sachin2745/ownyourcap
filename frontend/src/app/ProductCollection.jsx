import React from 'react'

const ProductCollection = () => {
  return (
    <section>
    <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black ">
      <header className="text-center">
        <h2 className="text-xl font-bold text-white  sm:text-3xl">
          New Collection
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </header>
      <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <li>
          <a href="#" className="group relative block">
            <img
              src="capimage2.jpg"
              alt=""
              className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white">Casual Cap</h3>
              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Shop Now
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
              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Shop Now
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
              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Shop Now
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