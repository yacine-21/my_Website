import React from 'react'
import style from './index.module.css'
import Terminal from 'react-console-emulator'

const Puzzle = () => {
    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' '),
        },
        pwd: {
            description: 'Prints the current directory.',
            usage: 'pwd',
            fn: () => '/root',
        },
        ls: {
            description: 'Lists directory contents.',
            usage: 'ls',
            fn: () => 'secret.txt',
        },
        secretCommand: {
            description: 'Reveals the secret of the five keys.',
            usage: 'secretCommand',
            fn: () => 'EN: With the five keys in hand, their order stands grand. Join them as one, and the path will be shown. Seek the treasure where paths are made and URLs are displayed. \n\n FR: Avec les cinq clés en main, leur ordre est grandiose. Joignez-les en une seule, et le chemin sera montré. Cherchez le trésor là où les chemins sont tracés et les URLs affichés.',
        },
        cat: {
            description: 'print the content of a file.',
            usage: 'cat <string>',
            fn: () =>
                ' EN : Congrats, you found the first key to find the treasure \n key : GAME \n Next step : look my gituhb repository "Treasure_game" \n\n FR : Félicitations, tu as trouvé la première clé pour trouver le trésor \n clé : GAME \n Prochaine étape : Regarde mon répértoire gituhb "Treasure_game" ',
        },
    }

    return (
        <div className={style.headline}>
            <section className={style.mainSection}>
                <h1>Puzzle</h1>
                <Terminal
                    commands={commands}
                    welcomeMessage={`
                                        EN : 
                                        Welcome, intrepid Adventurer! 🕵️‍♂️
                                        As you delve into the digital parchment, a whisper beckons you. "Adventurer, the *console* holds ancient secrets. Heed its call and embark on your quest!
                                        Good luck!
                                        First step: look at the file ;)

                                        
                                        FR :
                                        Bienvenue, aventurier intrépide! 🕵️‍♂️
                                        En plongeant dans le parchemin numérique, un murmure te sollicite. "Aventurier, la *console* renferme d'anciens secrets. Écoute son appel et lance-toi dans ta quête!
                                        Bonne chance!

                                        
                                        Première étape : regarde le fichier ;)
                                    `}
                    promptLabel={'root@root:~$'}
                />
            </section>
        </div>
    )
}

export default Puzzle
