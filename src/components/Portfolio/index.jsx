import React,{useEffect} from 'react'
import style from './index.module.css'
import AvailableMode from '../AvailableMode'

const Portfolio = () => {
    const availableModeViews = [
        {
            index: 1,
            label: 'CLASSIC',
            image: 'neutral',
            description:
                'Experience a clean and professional design, showcasing a blend of traditional layouts and modern aesthetics. Perfect for those who appreciate elegance and simplicity.',
        },
        {
            index: 2,
            label: 'GAMING',
            image: 'gaming',
            description:
                'Dive into a dynamic and immersive interface inspired by the world of gaming. Vibrant colors, interactive elements, and a touch of adrenaline await you.',
        },
        {
            index: 3,
            label: 'ETHICAL HACKER',
            image: 'hacker',
            description:
                'Step into the realm of cybersecurity with a hacker-inspired theme. Dark, mysterious, and filled with encrypted codes and digital art. For the tech enthusiasts and security aficionados.',
        },
    ]
	
	useEffect(() => {
	  // console.log("hey")
	}, [])
	

    return (
        <>
            <div className={style.wrap}>
                <p>PLEASE SELECT THE MODE :</p>
                <section className={style.sectionContainer}>
                    {availableModeViews.map((availableModeView) => {
                        return (
                            <AvailableMode
                                description={availableModeView.description}
                                image={availableModeView.image}
                                mode={availableModeView.label}
                                key={availableModeView.index}
                            />
                        )
                    })}
                </section>
            </div>
        </>
    )
}

export default Portfolio
