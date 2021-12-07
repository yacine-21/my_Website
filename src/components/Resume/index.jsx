import React from "react";
import style from "./index.module.css";

const Resume = () => {
  return (
    <section className={style.section}>
      <a
        className={style.download}
        href="/images/cv_YACINE_LYOUBI.pdf"
        download
        draggable="false"
        title="Download my cv here"
      >
        DOWNLOAD CV
      </a>
      <img
        src="/images/YACINE_LYOUBI_CV_.jpg"
        alt="cv"
        className={style.image}
      />
    </section>
  );
};

export default Resume;
