import React, { useState } from "react";
import style from "./card.module.css";
import Modal from "../Modal.js/Modal";

const Card = ({ title, description, date, author, type, image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={style.container}>
        <img alt="service" src={image} className={style.imageCard} />
        <div className={style.blocCard}>
          <p className={style.textType}>{type}</p>
          <p className={style.textTitle}>{title}</p>
          <p className={style.textDescription}>{description}</p>
          <button
            className="px-6 py-1  text-red-600 active:bg-pink-800 font-bold rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            more ...
          </button>

          <div className={style.bloc2}>
            <img
              alt="profil"
              src="/images/me2.png"
              className={style.authorImage}
            />
            <div className={style.textContainer}>
              <p className={style.authorText}>{author}</p>
              <p className={style.dateText}>{date}</p>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        // <>
        //   <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        //     <div className="relative w-auto my-6 mx-auto max-w-3xl">
        //       {/*content*/}
        //       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        //         {/*header*/}
        //         <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        //           <h3 className="text-3xl font-semibold">
        //             Additional information
        //           </h3>
        //         </div>
        //         {/*body*/}
        //         <div className="relative p-6 flex-auto">
        //           <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        //             I always felt like I could do anything. That’s the main
        //             thing people are controlled by! Thoughts- their perception
        //             of themselves! They're slowed down by their perception of
        //             themselves. If you're taught you can’t do anything, you
        //             won’t do anything. I was taught I could do everything.
        //           </p>
        //         </div>
        //         {/*footer*/}
        //         <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        //           <button
        //             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //             type="button"
        //             onClick={() => setShowModal(false)}
        //           >
        //             Close
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        // </>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default Card;
