import React from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import style from "./index.module.css";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      from_name: "",
      lastName: "",
      reply_to: "",
      message: "",
      to_name: "Yacine",
    },
    validationSchema: Yup.object({
      from_name: Yup.string()
        .min(5, "Must be 5 characters long at least")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .min(5, "Must be 5 characters long at least")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      reply_to: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string()
        .min(5, "Must be 5 characters long at least")
        .required("Required"),
    }),
    onSubmit: (values) => {
      emailjs
        .send(
          `${process.env.REACT_APP_SERVICE_ID_EMAILJS}`,
          `${process.env.REACT_APP_TEMPLATE_ID_EMAILJS}`,
          values,
          `${process.env.REACT_APP_USER_ID_EMAIL_JS}`
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("message sent");
            formik.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

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
            <span className={style.emojiBloc}>
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
            <form onSubmit={formik.handleSubmit}>
              {formik.touched.from_name && formik.errors.from_name ? (
                <div>{formik.errors.from_name}</div>
              ) : null}

              <div className={style.blocInput}>
                <label className={style.labelInput} htmlFor="from_name">
                  First Name
                </label>
                <input
                  placeholder="yacine . . ."
                  className={style.input_contact}
                  id="from_name"
                  name="from_name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.from_name}
                />
              </div>
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}

              <div className={style.blocInput}>
                <label className={style.labelInput} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  placeholder="lyoubi . . ."
                  className={style.input_contact}
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
              </div>

              {formik.touched.reply_to && formik.errors.message ? (
                <div>{formik.errors.reply_to}</div>
              ) : null}
              <div className={style.blocInput}>
                <label className={style.labelInput} htmlFor="reply_to">
                  Email Address
                </label>
                <input
                  placeholder="yacinelyoubi_tech@protonmail.com . . ."
                  className={style.input_contact}
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.reply_to}
                />
              </div>
              {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
              ) : null}
              <div className={style.blocInput}>
                <label className={style.labelInput} htmlFor="message">
                  Message
                </label>
                <textarea
                  placeholder="hey, I want to connect with you to discuss about . . ."
                  className={style.textAreaContact}
                  id="message"
                  name="message"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
              </div>
              <div className={style.containerInput}>
                <button className={style.buttonContact} type="submit">
                  Submit
                </button>
              </div>
              <div className={style.textInfoContainer}>
                <p>yacinelyoubi_tech@protonmail.com </p>
                 <h3><a href="https://bio.link/yacine_lyoubi" target="_blank">All my links</a></h3>
                <span className={style.iconBloc}>
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
            </form>
          </div>
        </div>

        {/* 
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
              <span className={style.iconBloc}>
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
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
