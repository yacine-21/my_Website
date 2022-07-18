import React from "react";
import style from "./index.module.css";

const Portfolio = () => {
	return (
		<>
			{/* <div class={style.wrap}>
        <div>
          <h1>PROJET METEO JS VANILLA</h1>

          <a href="https://github.com/yacine-21/Projet_Meteo_JS_Vanilla">
            Github
          </a>
          <a href="https://projet-meteo-js-vanilla.vercel.app/">Projet</a>
        </div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
      </div> */}
			<div className={style.wrap}>
				<h1>PORFOLIO COMMING SOON</h1>
				<p>PLEASE COME BACK LATER</p>
				<img
					className={style.construction}
					src='/images/construction.gif'
					alt='construction'
				/>
			</div>
		</>
	);
};

export default Portfolio;
