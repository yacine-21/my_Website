import React from 'react'

function AvailableMode({ mode, slug, image, description, handleSelectMode }) {
    const handleClick = () => {
        handleSelectMode(slug)
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-gray-900 hover:shadow-2xl">
            <img
                className="rounded-t-lg"
                src={`/images/illustration/${image}.png`}
                alt="illustration"
            />
            <div className="p-5 flex justify-center items-center flex-col">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {mode}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <a
                    onClick={handleClick}
                    href={`/${slug}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                    SELECT
                </a>
            </div>
        </div>
    )
}

export default AvailableMode