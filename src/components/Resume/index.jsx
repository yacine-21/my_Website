import React from "react";
import style from "./index.module.css";

const Resume = () => {
  return (
    <section className={style.section}>
      <a
        className={style.download}
        href="/images/yacine_lyoubi_2023.pdf"
        download
        draggable="false"
        title="Download my cv here"
      >
        DOWNLOAD CV
      </a>
      <img
        src="/images/yacine_lyoubi_cv.png"
        alt="cv"
        className={style.image}
      />
    </section>
  );
};

export default Resume;
