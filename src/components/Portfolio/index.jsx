import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import AvailableMode from '../AvailableMode'
import { useHistory } from 'react-router-dom'

const Portfolio = () => {
    let history = useHistory()

    const [valueLocalStorage, setValueLocalStorage] = useState(null)

    const handleSelectMode = (mode) => {
        history.push(`/${mode}`)
        setPreference(mode)
    }

    const setPreference = (key) => {
        localStorage.setItem('mode', key)
    }

    const availableModeViews = [
        {
            index: 1,
            slug: 'portfolioClassical',
            label: 'CLASSIC',
            image: 'neutral',
            description:
                'Experience a clean and professional design, showcasing a blend of traditional layouts and modern aesthetics. Perfect for those who appreciate elegance and simplicity.',
        },
        {
            index: 2,
            slug: 'portfolioGaming',
            label: 'GAMING',
            image: 'gaming',
            description:
                'Dive into a dynamic and immersive interface inspired by the world of gaming. Vibrant colors, interactive elements, and a touch of adrenaline await you.',
        },
        {
            index: 3,
            slug: 'portfolioHacking',
            label: 'ETHICAL HACKER',
            image: 'hacker',
            description:
                'Step into the realm of cybersecurity with a hacker-inspired theme. Dark, mysterious, and filled with encrypted codes and digital art. For the tech enthusiasts and security aficionados.',
        },
    ]

    useEffect(() => {
        const userChoice = localStorage.getItem('mode')
        if (userChoice) {
            history.push(`/${userChoice}`)
        }
    }, [history])

    return (
        <>
            <div className={style.wrap}>
                <p className={style.title}>PLEASE SELECT THE MODE :</p>
                <section className={style.sectionContainer}>
                    {availableModeViews.map((availableModeView) => {
                        return (
                            <AvailableMode
                                handleSelectMode={handleSelectMode}
                                description={availableModeView.description}
                                image={availableModeView.image}
                                mode={availableModeView.label}
                                key={availableModeView.index}
                                slug={availableModeView.slug}
                            />
                        )
                    })}
                </section>
            </div>
        </>
    )
}

export default Portfolio
