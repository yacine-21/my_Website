import React, { useState } from "react";
import style from "./index.module.css";

const Portfolio = () => {
  let [isvisible, setIsvisible] = useState(true);

  setTimeout(() => {
    setIsvisible(true);
  }, 5000);
  return (
    <>
      <div class={style.wrap}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
      </div>
    </>
  );
};

export default Portfolio;
