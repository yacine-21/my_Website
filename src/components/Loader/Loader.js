import React from "react";

function Loader() {
  return (
    <div className="white">
      <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
        <div className="hidden md:block absolute -bottom-32 -left-32 w-96 h-96">
          <div className="absolute text-extrabold text-xl right-12 z-20 text-start top-1/4">
            <span className="text-7xl">🎨</span>
            <p>Got a project ?</p>
            <a href="projet_client" className="link">
              Let&#x27;s talk
            </a>
          </div>
          <img src="images/icons/art.svg" alt="art" />
        </div>
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-red-800 dark:text-white font-black text-3xl flex items-center">
              <img src="images/icons/mail.svg" alt="mail" />
              <span className="text-xs ml-3 mt-1">
                yacinelyoubi37@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <nav className="font-sen text-red-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <a href="/works" className="py-2 px-6 flex hover:text-red-600">
                  Works
                </a>
                <a href="/resume" className="py-2 px-6 flex hover:text-red-600">
                  Resume
                </a>
                <a
                  href="/services"
                  className="py-2 px-6 flex hover:text-red-600"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="py-2 px-6 flex hover:text-red-600"
                >
                  Contact
                </a>
              </nav>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="flex relative z-20 items-center">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col">
              <img
                alt="me"
                src="/images/me.png"
                className="rounded-full w-28 mx-auto"
              />
              <p className="text-3xl my-6 text-center text-red-800">
                Hi, I'm Yacine 🤘
              </p>
              <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-red-800 text-center py-2">
                Digital solution developer designer, full stack.
              </h2>
              <div className="flex items-center justify-center mt-4">
                <a
                  href="/connect"
                  className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-red-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-red-800 hover:bg-gray-800 hover:text-white text-md"
                >
                  CONNECT WITH ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Loader;
