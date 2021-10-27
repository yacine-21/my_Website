import React from "react";

const Resume = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800 flex flex-col justify-center items-center">
      <a
        className="text-center text-white text-4xl animate-pulse border-double border-4 bg-gray-400 m-5 p-5 rounded-full hover:bg-gray-800"
        href="/images/yacine_lyoubi_cv.png"
        download
        draggable="false"
        title="Download my cv here"
      >
        DOWNLOAD CV
      </a>
      <img
        src="/images/yacine_lyoubi_cv.png"
        alt=""
        className="object-cover w-full md:w-2/4 rounded-md xl:col-span-3 bg-gray-500"
      />
    </section>
  );
};

export default Resume;
