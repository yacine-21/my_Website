import React from "react";
import style from "./Modal.module.css";

const Modal = ({ setShowModal, description }) => {
  return (
    <>
      <div className={style.containerModal}>
        <div className={style.blocModal}>
          {/*content*/}
          <div className={style.contentModal}>
            {/*header*/}
            <div className={style.headerBlocModal}>
              <h3 className={style.titleModal}>Additional information</h3>
            </div>
            {/*body*/}
            <div className={style.bodyBlocModal}>
              <p className={style.descriptionModal}>{description}</p>
              <button className={style.buttonModal}>
                <a href="/contact">contact me !</a>
              </button>
            </div>
            {/*footer*/}
            <div className={style.footerModal}>
              <button
                className={style.buttonFooterModal}
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.blackScreenModal}></div>
    </>
  );
};

export default Modal;
