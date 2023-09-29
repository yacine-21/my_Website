import React from 'react'
import { useModal } from '../contextProvider'

function CardProject({ title, stacks, description, key }) {
    const { setOpenModal, setSelectedProject } = useModal()

    const handleClick = () => {
        setSelectedProject({ title, description, key, stacks })
        setOpenModal(true)
    }
    return (
        <div
            onClick={handleClick}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg w-2/5 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-20"
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://th.bing.com/th/id/OIG.4qxh3FR895Jt7bqrHvY3?pid=ImgGn"
                alt="illustration"
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-80">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-2xl w-full text-gray-700 dark:text-gray-400 truncate">
                    {description}
                </p>
                <p className="mb-3  text-gray-700 dark:text-gray-400 italic font-extrabold">
                    {stacks.join(' | ')}
                </p>
            </div>
        </div>
    )
}
export default CardProject
