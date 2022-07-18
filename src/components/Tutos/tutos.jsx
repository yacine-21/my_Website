import React from "react";
import style from "./index.module.css";

const Tutos = () => {
	return (
		<>
			<div className={style.wrap}>
				<h1>YOUTUBE TUTO COMMING SOON</h1>
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

export default Tutos;
