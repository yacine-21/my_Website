import React, { useState } from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Portolio = () => {
  let [showPortfolio, setShowPortfolio] = useState(false);

  setTimeout(() => {
    setShowPortfolio(true);
  }, 5000);

  if (showPortfolio) {
    return (
      <>
        <Header />
        <Portfolio />
        <Footer />
      </>
    );
  } else {
    return <Loader />;
  }
};

export default Portolio;
