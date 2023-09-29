import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardProject from '../components/CardProject'
import { getCollection } from '../utils'
import Skeleton from '../components/Skeleton'
import { useModal } from '../contextProvider'
import ProjectDetail from '../components/ProjectDetail'
import { useHistory } from 'react-router-dom'

const PortfolioClassical = () => {
    let history = useHistory()

    const { openModal, selectedProject, projects, setProjects } = useModal()

    const fetchProjects = async () => {
        const fetchedProjects = await getCollection('projects')
        setProjects(fetchedProjects)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <>
            <Header />
            <div>
                <button
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transform hover:scale-105 transition-transform"
                    onClick={() => {
                        localStorage.removeItem('mode')
                        history.push(`/portfolio`)
                    }}
                >
                    Changer le mode
                </button>
            </div>
            <section className="flex justify-around items-center flex-wrap w-screen xl:min-h-screen">
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
            <Footer />
        </>
    )
}

export default PortfolioClassical
