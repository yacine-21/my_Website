import React from "react";
import style from "./card.module.css";

const card = ({ title, description, date, author, type, image }) => {
  return (
    <div className={style.container}>
      <a href="/" className={style.link}>
        <img alt="service" src={image} className={style.imageCard} />
        <div className={style.blocCard}>
          <p className={style.textType}>{type}</p>
          <p className={style.textTitle}>{title}</p>
          <p className={style.textDescription}>{description}</p>
          <div className={style.bloc2}>
            <a href="/" className="block relative">
              <img
                alt="profil"
                src="/images/me2.png"
                className={style.authorImage}
              />
            </a>

            <div className={style.textContainer}>
              <p className={style.authorText}>{author}</p>
              <p className={style.dateText}>{date}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default card;
