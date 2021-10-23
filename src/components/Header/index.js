import React from "react";
import styles from "./index.module.css";

function Header() {
  return (
    <nav>
      <ul>
        <li className={styles.item1}>coucou</li>
        <li className={styles.item1}>hihi</li>
        <li className={styles.item1}>aloha</li>
      </ul>
    </nav>
  );
}

export default Header;
