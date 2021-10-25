import React from "react";
import style from "./index.module.css";
import Card from "../Card/card";

const Service = () => {
  return (
    <div className="w-screen xl:min-h-screen flex flex-col items-center">
      <h1 className={style.title}>What Can I do for you ?</h1>
      <div class={style.container}>
        <Card
          title="Build an app React "
          author="yacine lyoubi"
          date="20 mars 2029 - 6 mn read"
          description="Create a app react, with a bdd"
          image="/images/react.png"
          type="App"
        />
        <Card
          title="Build an app Symfony "
          author="yacine lyoubi"
          date="31 mars 2029 - 6 mn read"
          description="Create a app symfony, with a bdd"
          image="/images/symfony.jpg"
          type="App"
        />
        <Card
          title="Build an website static "
          author="yacine lyoubi"
          date="20 mars 2029 - 6 mn read"
          description="Create a website static, html, css and js vanilla"
          image="/images/static.png"
          type="App"
        />
        <Card
          title="Build an e-commerce website "
          author="yacine lyoubi"
          date="20 mars 2029 - 6 mn read"
          description="Create a e-commerce website, with a wordpress"
          image="/images/wordpress.jpg"
          type="App"
        />
        <Card
          title="Build an app Mobile "
          author="yacine lyoubi"
          date="20 mars 2029 - 6 mn read"
          description="Create a app Mobile, with react native , bdd and api"
          image="/images/react_native.jpg"
          type="App"
        />
      </div>
    </div>
  );
};

export default Service;
