import React from "react";

const Error = () => {
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="images/404.svg"
        className="absolute h-full w-full object-cover"
        alt="error_404"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full font-mono flex flex-col items-center relative z-10">
          <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4 animate-pulse">
            You&#x27;re alone here
          </h1>
          <p class="font-extrabold text-8xl my-28 text-white animate-bounce">
            404
          </p>
          <p className="text-white font-extrabold text-3xl my-10">
            come back to a safe place ...
          </p>
          <a href="/">
            <button class="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white border-2 border-gray-900 focus:outline-none hover:bg-gray-500">
              Safe place
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
