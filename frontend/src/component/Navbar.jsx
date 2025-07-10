import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const token =localStorage.getItem("token")
  const navigate= useNavigate();
    const handlelogout = () =>{
      localStorage.removeItem("token");
      navigate("/login")
    }
  return (
    <>
      <nav className="block py-4 w-full max-w-full rounded-none px-4 bg-transparent text-white shadow-none absolute z-50 border-0">
        <div className="container flex items-center justify-between mx-auto">
          <Link to="/">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit">
              Intervue AI
            </h6>
          </Link>
          <ul className="items-center hidden gap-6 ml-10 lg:flex">
            {/* ...desktop links... */}
            <li>
              {token? (<Link to="/interview" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                  New Interview
                </Link>):(
                  <Link to="/login" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                  New Interview
                </Link>
                )}
            </li>
            <li>
              <a href="#" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                Blocks
              </a>
            </li>
            <li>
              <a href="#" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                Docs
              </a>
            </li>
          </ul>
          <div className="items-center hidden gap-4 lg:flex">
            {token? (
              <div className="items-center hidden gap-4 lg:flex">
              <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white hover:bg-white/10 active:bg-white/30" type="button" onClick={handlelogout}>
                Logout
              </button>
              </div>
            ):(
              <div className="items-center hidden gap-4 lg:flex">
            <Link to="/login">
              <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white hover:bg-white/10 active:bg-white/30" type="button">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white hover:bg-white/10 active:bg-white/30" type="button">
                Sign In
              </button>
            </Link>
            </div>
            )}
          </div>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 inline-block ml-auto lg:hidden"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              {/* SVG icon here */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </button>
        </div>
        {/* Mobile menu */}
        <div
          className={`block w-full basis-full overflow-hidden transition-all duration-300 lg:hidden ${mobileOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}
          style={{ background: 'white' }}
        >
          <div className="container px-6 py-5 mx-auto mt-4 bg-white rounded-lg">
            <ul className="flex flex-col gap-4 text-gray-900">
              <li>
                <Link to="/interview" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                New Interview
              </Link>
              </li>
              <li>
                <a href="#" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                  Blocks
                </a>
              </li>
              <li>
                <a href="#" className="antialiased font-sans text-base leading-relaxed text-inherit flex items-center gap-2 font-medium">
                  Docs
                </a>
              </li>
            </ul>
            {token?(<div className="flex items-center gap-4 mt-6 mb-4">
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button"  onClick={handlelogout}>
                  Logout
                </button>
            </div>):(
              <div className="flex items-center gap-4 mt-6 mb-4">
              <Link to="/login">
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                  Sign In
                </button>
              </Link>
            </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar