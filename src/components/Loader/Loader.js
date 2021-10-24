import React from "react";
import Nav from "../Header/nav";

function Loader() {
  return (
    <div className="white">
      <Nav />

      <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden">
        <div className="hidden md:block absolute -bottom-28 -left-32 w-96 h-96">
          <div className="absolute text-extrabold text-xl right-12 z-20 text-start top-1/4">
            <span className="text-7xl">🎨</span>
            <p>Got a project ?</p>
            <a href="projet_client" className="link">
              Let's talk
            </a>
          </div>
          <img src="images/icons/art.svg" alt="art" />
        </div>
        <div className="flex relative z-20 items-center">
          <div className="container mx-auto  flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col mt-36 overflow-y-hidden ">
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
                  className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-red-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-red-800 hover:bg-gray-800 hover:text-white text-md animate-pulse"
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
