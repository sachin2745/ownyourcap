import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full pb-28  bg-white">

    <div className="relative  bg-indigo-400 dark:bg-primary pb-7 " >
      <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
        <div className="flex items-center flex-wrap px-2 md:px-0 ">
        <div className="ml-auto pl-24 -mt-11 lg:-mb-56 lg:w-6/12">
            <img
              src="herosectionimg.png"
              className="relative  lg:w-[600px] lg:h-[560px]"
              alt="food illustration"
              loading="lazy"
             
            />
          </div>
          <div className="relative  lg:w-6/12 lg:py-24 xl:py-32 pl-44">
            <h1 className="font-Quicksand -mt-12  text-black md:text-6xl lg:w-10/12">
              Look Stylish with
            </h1>
            <h2 className="font-Quicksand  text-black md:text-6xl lg:w-10/12">
              the Best <br /> Caps & Hats
            </h2>                      
          </div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero