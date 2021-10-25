import React from "react";
import style from "./index.module.css";

const Contact = () => {
  return (
    <section className={style.section_contact}>
      <div className={style.container_contact}>
        <div className={style.bloc_text}>
          <img alt="me" src="/images/me2.png" className={style.bitmoji} />
          <h1 className={style.contactUs}>Contact Me</h1>
          <p className={style.p_contact}>
            If you want to discuss about anything don't hesitate and send me a
            message!
            <br />
            Fill in the form down here :)
            <br />
            <span className="w-auto h-5 flex justify-around animate-bounce">
              <img
                className={style.emoji}
                src="/images/icons/hand.svg"
                alt="hand"
              />
              <img
                className={style.emoji}
                src="/images/icons/hand.svg"
                alt="hand"
              />
            </span>
          </p>
        </div>
        <div className={style.sousBlocInput}>
          <div className={style.sousBlocInputFlex}>
            <div className={style.inputMarge}>
              <div className={style.blocInput}>
                <label for="name" className={style.labelInput}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={style.input_contact}
                />
              </div>
            </div>
            <div className={style.inputMarge}>
              <div className={style.blocInput}>
                <label for="email" className={style.labelInput}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={style.input_contact}
                />
              </div>
            </div>
            <div className={style.containerInput}>
              <div className={style.blocInput}>
                <label for="message" className={style.labelInput}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={style.textAreaContact}
                ></textarea>
              </div>
            </div>
            <div className={style.containerInput}>
              <button className={style.buttonContact}>Envoyer</button>
            </div>
            <div className={style.textInfoContainer}>
              <p>yacinelyoubi37@gmail.com </p>
              <p className={style.infoContactSpacing}>
                1 rue du soleil levant
                <br />
                92140 Clamart
              </p>
              <span className="sm:inline-flex hidden">
                <a
                  href="https://twitter.com/Yacine_D_21"
                  className={style.item_footer}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <img
                    className={style.images_footer}
                    src="/images/icons/twitter.svg"
                    alt="twitter"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/yacine-lyoubi/"
                  className={style.item_footer}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <img
                    src="/images/icons/linkedin.svg"
                    alt="linkedin"
                    className={style.images_footer}
                  />
                </a>
                <a
                  href="https://github.com/yacine-21"
                  className={style.item_footer}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <img
                    src="/images/icons/github.svg"
                    alt="github"
                    className={style.images_footer}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
