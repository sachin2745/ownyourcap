import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full pb-32 bg-red-50">

    <div className="relative  bg-primary/90 " >
      <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
        <div className="flex items-center flex-wrap px-2 md:px-0 ">
          <div className="relative lg:w-6/12 lg:py-24 xl:py-32 pl-48">
            <h1 className="font-Quicksand  text-black md:text-6xl lg:w-10/12">
              Look Stylish with
            </h1>
            <h2 className="font-Quicksand  text-white md:text-6xl lg:w-10/12">
              the Best <br /> Caps & Hats
            </h2>                      
          </div>
          <div className="ml-auto pl-20  lg:-mb-56 lg:w-6/12">
            <img
              src="hrx.png"
              className="relative -mt-24  lg:w-[600px] lg:h-[560px]"
              alt="food illustration"
              loading="lazy"
             
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero