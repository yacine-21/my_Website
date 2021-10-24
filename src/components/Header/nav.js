import React, { useState } from "react";

function Nav() {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <div className="dark">
          <div className="w-screen h-screen bg-white dark:bg-gray-700 absolute z-40 lg:hidden">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around">
              <div className="w-72 h-screen">
                <nav className="mt-10 px-6 ">
                  <a
                    className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                    href="/"
                  >
                    <span className="mx-4 text-lg font-normal">Element</span>
                    <span className="flex-grow text-right"></span>
                  </a>
                  <a
                    className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
                    href="/"
                  >
                    <span className="mx-4 text-lg font-normal">Form</span>
                    <span className="flex-grow text-right"></span>
                  </a>
                  <a
                    className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                    href="/"
                  >
                    <span className="mx-4 text-lg font-normal">Commerce</span>
                    <span className="flex-grow text-right"></span>
                  </a>
                  <a
                    className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                    href="/"
                  >
                    <span className="mx-4 text-lg font-normal">Navigation</span>
                    <span className="flex-grow text-right"></span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-red-800 dark:text-white font-black text-3xl flex items-center">
            <img src="images/icons/mail.svg" alt="mail" />
            <span className="text-xs ml-3 mt-1">yacinelyoubi37@gmail.com</span>
          </div>
          <div className="flex items-center">
            <nav className="font-sen text-red-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <a href="/works" className="py-2 px-6 flex hover:text-red-600">
                Works
              </a>
              <a href="/resume" className="py-2 px-6 flex hover:text-red-600">
                Resume
              </a>
              <a href="/services" className="py-2 px-6 flex hover:text-red-600">
                Services
              </a>
              <a href="/contact" className="py-2 px-6 flex hover:text-red-600">
                Contact
              </a>
            </nav>
            <button
              className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group lg:hidden z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
