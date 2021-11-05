import React from "react";
import style from "./index.module.css";

const Portfolio = () => {
  return (
    <main className={style.main}>
      <section className={style.section1}>
        <h1>If you wanna discover my works click or scroll down </h1>
        <a href="https://portfolioyacinelyoubi.gatsbyjs.io/">
          All the magic happend here ;)
        </a>
        {/* <img
          className={style.scroll}
          draggable={false}
          src="/images/scroll-down.gif"
          alt="scroll down"
        /> */}
      </section>
    </main>
  );
};

export default Portfolio;
