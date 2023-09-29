import React, { useEffect, useState } from 'react'
import CardProject from '../components/CardProject'
import { getCollection } from '../utils'
import Skeleton from '../components/Skeleton'
import { useModal } from '../contextProvider'
import ProjectDetail from '../components/ProjectDetail'
import { useHistory } from 'react-router-dom'


const PortfolioGaming = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { openModal, selectedProject, projects, setProjects } = useModal()
    let history = useHistory()


    const fetchProjects = async () => {
        const fetchedProjects = await getCollection('projects')
        setProjects(fetchedProjects)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <div className="h-screen bg-gray-800 text-white p-8 flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold mb-4">Portfolio Gaming</h1>
            <p className="text-lg mb-8">
                Découvrez mes projets inspirés de l'univers du RPG.
            </p>

            {menuOpen ? (
                <section className="w-screen flex flex-wrap justify-around items-center animate-fadeIn">
                    <button
                        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded transform hover:scale-105 transition-transform min-w-full"
                        onClick={() => {
                            setMenuOpen(false)
                        }}
                    >
                        Fermer le menu
                    </button>

                    {openModal && selectedProject && <ProjectDetail />}
                    {projects.length !== 0 ? (
                        projects.map(({ description, stacks, title, id }) => (
                            <CardProject
                                key={id}
                                description={description}
                                stacks={stacks}
                                title={title}
                            />
                        ))
                    ) : (
                        <Skeleton />
                    )}
                </section>
            ) : (
                <div className="flex flex-col items-center h-80 justify-around w-1/3">
                    <button
                        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transform hover:scale-150 transition-transform min-w-full"
                        onClick={() => {
                            setMenuOpen(true)
                        }}
                    >
                        Ouvrir le menu
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transform hover:scale-150 transition-transform min-w-full"
                        onClick={() => {
                            localStorage.removeItem('mode')
                            history.push(`/portfolio`)
                        }}
                    >
                        Changer le mode
                    </button>
                    
                </div>
            )}
        </div>
    )
}

export default PortfolioGaming
