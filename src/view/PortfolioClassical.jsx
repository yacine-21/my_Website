import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardProject from '../components/CardProject'
import { getCollection } from '../utils'
import Skeleton from '../components/Skeleton'

import ProjectDetail from '../components/ProjectDetail'

const PortfolioClassical = () => {
    const [projects, setProjects] = useState([])
    const [openModal, setOpenModal] = useState(false)

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

            <ProjectDetail />
            <section className="flex justify-around items-center flex-wrap w-screen xl:min-h-screen">
                {projects.length !== 0 ? (
                    projects.map(({ description, stacks, title, id }) => (
                        <CardProject
                            description={description}
                            stacks={stacks}
                            title={title}

                            setOpenModal={setOpenModal}
                            key={id}
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
