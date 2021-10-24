import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="/" className={styles.sentence_footer}>
        Yacine Website
      </a>

      <p className={styles.legalMention}>All rights reserved</p>

      <div className="flex -mx-2">
        <a
          href="https://twitter.com/Yacine_D_21"
          className={styles.item_footer}
          target="_blank"
          rel="noreferrer"
          aria-label="twitter"
        >
          <img
            className={styles.images_footer}
            src="/images/icons/twitter.svg"
            alt="twitter"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/yacine-lyoubi/"
          className={styles.item_footer}
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin"
        >
          <img
            src="/images/icons/linkedin.svg"
            alt="linkedin"
            className={styles.images_footer}
          />
        </a>
        <a
          href="https://github.com/yacine-21"
          className={styles.item_footer}
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <img
            src="/images/icons/github.svg"
            alt="github"
            className={styles.images_footer}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
