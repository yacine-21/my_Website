import React from "react";
import style from "./index.module.css";
import Loader from "react-loader-spinner";

const LoaderPortfolio = () => {
  return (
    <main className={style.mainLoader}>
      <h1 className={style.titleLoader}>
        I'm comming
        <Loader
          className={style.Loader}
          type="ThreeDots"
          color="#EF482A"
          height={50}
          width={50}
        />
      </h1>
      <Loader
        className={style.Loader}
        type="Puff"
        color="#EF482A"
        height={900}
        width={1000}
      />
    </main>
  );
};

export default LoaderPortfolio;
