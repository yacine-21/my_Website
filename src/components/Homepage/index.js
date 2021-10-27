import React from "react";
import Header from "../Header/";
import Footer from "../Footer";
import styles from "./index.module.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="white">
        <main className={styles.main}>
          <div className={styles.bloc}>
            <div className={styles.sousBloc}>
              <span className={styles.peinture}>🎨</span>
              <p>Got a project ?</p>
              <a href="projet_client" className={styles.link}>
                Let's talk
              </a>
            </div>
            <img src="images/icons/art.svg" alt="art" />
          </div>
          <div className={styles.bloc2}>
            <div className={styles.textInfo}>
              <div className={styles.textInfo2}>
                <img
                  alt="me"
                  src="/images/me2.png"
                  className={styles.bitmoji}
                />
                <p className={styles.sentence1}>
                  Hi, I'm Yacine <span className={styles.emoji}>🤘</span>
                </p>
                <h2 className={styles.sentence2}>
                  A digital solution developer designer full stack.
                </h2>
                <div className={styles.blocButton}>
                  <a href="/connect" className={styles.textButton}>
                    CONNECT WITH ME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
