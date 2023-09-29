import React from 'react'
import { useModal } from '../contextProvider'

const ProjectDetail = () => {
    const { openModal, selectedProject, setOpenModal, setSelectedProject } =
        useModal()

    const handleClick = () => {
        setOpenModal(false)
        setSelectedProject(null) // Reset the selected project
    }

    if (!openModal || !selectedProject) return null // Don't render anything if modal is not open or no project is selected

    const { title, description, stacks } = selectedProject

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-blue-300  z-40 overflow-hidden w-screen">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="flex justify-center items-center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg  w-8 h-8 ml-auto  dark:hover:bg-gray-600 dark:hover:text-white text-5xl"
                        data-modal-hide="defaultModal"
                    >
                        x
                    </button>
                </div>
                <div className="p-6 space-y-6 min-h-screen">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {stacks.join(' | ')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
