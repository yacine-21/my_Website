import React from 'react'
import style from './index.module.css'

function SecretPath() {
    return (
        <div className={style.maindiv}>
            <h1 className={style.greeting}>Congratulations, Adventurer!</h1>
            <p className={style.text1}>
                You've successfully navigated the challenges and uncovered the
                hidden secrets of the realm.
            </p>
            <p className={style.text1}>
                Vous avez réussi à relever les défis et à découvrir les secrets
                cachés du royaume.
            </p>
            <img
                src="https://media.tenor.com/oxbvd9BfPqUAAAAC/opening-the-treasure-chest-gwent.gif"
                alt="Reward"
                className="mx-auto mb-6"
            />
            <p className={style.text2}>
                As a token of our appreciation, we present to you an exclusive
                reward.
            </p>
            <p className={style.text2}>
                En guise de remerciement, voici une récompense exclusive
                spécialement pour vous.
            </p>

            <hr />
            <p>
                Special Offer! Contact me to inquire about my services and
                receive an exclusive one-time 50% discount.
            </p>
            <p>
                Offre spéciale ! Contactez-moi pour en savoir plus sur mes
                services et bénéficiez d'une remise exclusive de 50%, valable
                une seule fois.
            </p>
        </div>
    )
}

export default SecretPath
