import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './index.module.css'
import Typed from 'react-typed'

const Homepage = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <img
                    alt="me"
                    src="https://media4.giphy.com/media/RDZo7znAdn2u7sAcWH/giphy.gif"
                    className={styles.image1}
                />
                <img
                    alt="me"
                    src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
                    className={styles.image2}
                />
                <div className={styles.bloc2}>
                    <div className={styles.textInfo}>
                        <img
                            alt="me"
                            src="/images/me2.png"
                            className={styles.bitmoji}
                        />
                        <p className={styles.infoBis}>
                            I'm passionate about everything I do. ;)
                        </p>
                        <p className={styles.sentence1}>
                            Hi, I'm Yacine{' '}
                            <span className={styles.emoji}>🤘</span>
                        </p>

                        <h1 className={styles.sentence2}>I'm a </h1>
                        <Typed
                            className={styles.typedText}
                            strings={[
                                'Developer full stack',
                                'Cybersecurity analyst',
                                'Ethical hacker junior',
                            ]}
                            typeSpeed={100}
                            loop
                            backSpeed={20}
                            backDelay={10}
                            cursorChar=">"
                            showCursor={true}
                        ></Typed>

                        <div className={styles.blocButton}>
                            <a href="/contact" className={styles.textButton}>
                                CONNECT WITH ME
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Homepage
