import React from 'react'
import { Link } from 'react-router-dom'

export const Homepage = () => {
  return (
    <>
    <div className="relative min-h-screen w-full bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://bucket.material-tailwind.com/magic-ai/bf4749de9573ee9d64b6b9f5762a691da04cf18776b02a24c1a25d4009f4fb9e.jpg')" }}>
        <div className="absolute inset-0 w-full h-full bg-gray-900/50"></div>
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 grid mx-auto my-auto text-center place-items-center">
            <h3 className="block antialiased tracking-normal font-sans font-semibold text-white mb-2 text-lg !leading-snug lg:text-2xl"></h3>
            <h1 className="block antialiased tracking-normal font-sans font-semibold text-white text-3xl !leading-snug lg:text-5xl">Simple Dark Theme Nav Bar on Left Side</h1>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mt-1 mb-12 lg:max-w-2xl">
              Navigate through our restaurant&#39;s website with ease using the simple dark theme navigation bar located on the left side of the page. Discover our menu, make reservations, and explore all our offerings effortlessly.
            </p>
            <div className="flex items-center gap-4">
                <Link to="/signup">
              <button className="align-middle select-none font-sans font-bold 
              text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 
              px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg 
              hover:shadow-gray-900/20 active:opacity-[0.85]" type="button">Get Started</button>
              </Link>
              <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-black-500 rounded-full" type="button">
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  {/* SVG icon here */}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
