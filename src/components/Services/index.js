import React from "react";
import style from "./index.module.css";
import Card from "../Card";

const Service = () => {
  return (
    <div className={style.containerService}>
      <h1 className={style.title}>What Can I do for you ?</h1>
      <div className={style.container}>
        <Card
          title="Build an app React "
          author="yacine lyoubi"
          date="20 mars 2029 - 6 mn read"
          description="Create a app react, with a bdd"
          image="/images/react.png"
          type="App"
          id="1"
        />
        <Card
          title="Build an app Symfony "
          author="yacine lyoubi"
          date="31 mars 2029 - 6 mn read"
          description="Create a app symfony, with a bdd (mysql,postgresql)"
          image="/images/symfony.jpg"
          type="App"
          id="2"
        />
        <Card
          title="Build an website static "
          author="yacine lyoubi"
          date="20 mars 2029 - 6 mn read"
          description="Create a website static, html, css and js vanilla"
          image="/images/static.png"
          type="Website"
          id="3"
        />
        <Card
          title="Build an e-commerce website "
          author="yacine lyoubi"
          date="20 mars 2029 - 6 mn read"
          description="Create a e-commerce website, with a wordpress"
          image="/images/wordpress.jpg"
          type="Website"
          id="4"
        />
        <Card
          title="Build an app Mobile "
          author="yacine lyoubi"
          date="20 mars 2029 - 6 mn read"
          description="Create a app Mobile, with react native , bdd and api"
          image="/images/react_native.jpg"
          type="Mobile"
          id="5"
        />
      </div>
    </div>
  );
};

export default Service;
