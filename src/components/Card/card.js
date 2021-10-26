import React, { useState } from "react";
import style from "./card.module.css";
import Modal from "../Modal.js/Modal";

const Card = ({ title, description, date, author, type, image, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [description_detail, setDescription_detail] = useState("");

  const handlerModal = ({ id }) => {
    setShowModal(true);
    switch (id) {
      case "1":
        setDescription_detail(
          `Create a app react, with bdd !
          Stack : React, (redux,useContect)
           api, mongo, mysql, postgresql, graphql.
           Please for more information, I strongely recommand you to contact me`
        );
        break;
      case "2":
        setDescription_detail(
          `Create a app symfony, with a bdd !
          Stack : Symfony,front
           api,  mysql, postgresql, graphql.
           Please for more information, I strongely recommand you to contact me`
        );
        break;
      case "3":
        setDescription_detail(
          `Create a website static, html, css and js vanilla !
          Stack : HTML,CSS(scss / tailwind, bootstrap), JS 
           Please for more information, I strongely recommand you to contact me`
        );
        break;
      case "4":
        setDescription_detail(
          `Create a e-commerce website, with a wordpress !
           Please for more information, I strongely recommand you to contact me`
        );
        break;
      case "5":
        setDescription_detail(
          `Create a app Mobile, with react native , bdd and api !
          Stack : React Native expo, 
           api, mongo, mysql, postgresql, graphql.
           Please for more information, I strongely recommand you to contact me`
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={style.container}>
        <img alt="service" src={image} className={style.imageCard} />
        <div className={style.blocCard}>
          <p className={style.textType}>{type}</p>
          <p className={style.textTitle}>{title}</p>
          <p className={style.textDescription}>{description}</p>
          <button
            className={style.modalButton}
            type="button"
            onClick={() => handlerModal({ id })}
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
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          description={description_detail}
        />
      ) : null}
    </>
  );
};

export default Card;
