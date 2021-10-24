import React, { useState } from "react";
import styles from "./index.module.css";

function Header() {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <div className="dark">
          <div className={styles.container_header}>
            <div className={styles.bloc1_header}>
              <div className={styles.header_header}>
                <nav className={styles.nav_header}>
                  <a className={styles.item_header} href="/">
                    <span className={styles.item_li_header}>Home</span>
                  </a>
                  <a className={styles.item_header} href="/portfolio">
                    <span className={styles.item_li_header}>Portfolio</span>
                  </a>
                  <a className={styles.item_header} href="/resume">
                    <span className={styles.item_li_header}>Resume</span>
                  </a>
                  <a className={styles.item_header} href="/service">
                    <span className={styles.item_li_header}>Service</span>
                  </a>
                  <a className={styles.item_header} href="/contact">
                    <span className={styles.item_li_header}>Contact</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <header className={styles.header2_header}>
        <div className={styles.bloc2_header}>
          <div className={styles.blocMail_header}>
            <img src="images/icons/mail.svg" alt="mail" />
            <span className={styles.mail_header}>yacinelyoubi37@gmail.com</span>
          </div>
          <div className="flex items-center">
            <nav className="font-sen text-red-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <a href="/" className={styles.item_open_header}>
                Home
              </a>
              <a href="/portfolio" className={styles.item_open_header}>
                Portfolio
              </a>
              <a href="/resume" className={styles.item_open_header}>
                Resume
              </a>
              <a href="/services" className={styles.item_open_header}>
                Services
              </a>
              <a href="/contact" className={styles.item_open_header}>
                Contact
              </a>
            </nav>
            <button
              className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group lg:hidden z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
