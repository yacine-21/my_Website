import { createContext, useContext, useState, useEffect } from 'react'
import { getCollection } from './utils' // Assuming this is your fetch function

const ModalContext = createContext()

export const useModal = () => {
    return useContext(ModalContext)
}

export const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [projects, setProjects] = useState([])

    const fetchProjects = async () => {
        const fetchedProjects = await getCollection('projects')
        setProjects(fetchedProjects)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <ModalContext.Provider
            value={{
                openModal,
                setOpenModal,
                selectedProject,
                setSelectedProject,
                projects,
                setProjects,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}
