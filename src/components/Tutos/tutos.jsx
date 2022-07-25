import React from "react";
import CardVideo from "../CardVideo/CardVideo";
import style from "./index.module.css";

const Tutos = () => {
	return (
		<div className={style.wrap}>
			<section className={style.section}>
				<h1 className={style.Title}>My tutorials</h1>
				<div className='max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow hover:bg-gray-500 hover:text-white'>
					<div class='mb-2'>
						<div class='h-3 text-3xl text-left text-gray-600'>“</div>
						<p class='px-4 text-center text-black text-2xl hover:text-white'>
							Sharing knowledge is the best way to learn
						</p>
						<div class='h-3 text-3xl text-right text-gray-600'>”</div>
					</div>
				</div>
			</section>
			<div className='container_video'>
				<CardVideo
					description={
						"Introduction to the basic commands of Linux and how to use them."
					}
					title={"Linux Intro 1"}
					url={"https://www.youtube.com/embed/C8hsuX_uDU0"}
				/>
			</div>
		</div>
	);
};

export default Tutos;
