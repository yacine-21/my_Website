import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <img
          alt="me"
          src="https://i.pinimg.com/originals/13/40/75/1340756a66158cf55f09ef2dfa23ae74.gif"
          className={styles.image1}
        />
        <img
          alt="me"
          src="https://c.tenor.com/cOhgxKZrGqQAAAAC/zoro-one-piece.gif"
          className={styles.image2}
        />
        <div className={styles.bloc2}>
          <div className={styles.textInfo}>
            <div className={styles.textInfo2}>
              <img alt="me" src="/images/me2.png" className={styles.bitmoji} />
              <p className={styles.sentence1}>
                Hi, I'm Yacine <span className={styles.emoji}>🤘</span>
                <br />
                <span className={styles.infoBis}>yes ... I like manga ;)</span>
              </p>
              <h2 className={styles.sentence2}>
                A digital solution developer designer full stack.
              </h2>

              <div className={styles.blocButton}>
                <a href="/contact" className={styles.textButton}>
                  CONNECT WITH ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
