import React from "react";
import style from "./index.module.css";

const Resume = () => {
  return (
    <section className={style.section}>
      <a
        className={style.download}
        href="/images/Yacine_Lyoubi_CV_CYBER.pdf"
        download
        draggable="false"
        title="Download my cv here"
      >
        DOWNLOAD CV
      </a>
      <img
        src="/images/Yacine_Lyoubi_CV_CYBER.png"
        alt="cv"
        className={style.image}
      />
    </section>
  );
};

export default Resume;
