import React from "react";

function CardVideo({ title, description, url }) {
	return (
		<div className='max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
				<iframe
					className='w-full h-full'
					src={url}
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
				></iframe>
			
			<div className='p-5'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{title}
					</h5>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{description}
				</p>
				<a
					href='https://www.youtube.com/channel/UCrI2s8VG2F_bYvLhbl0KpfQ/videos'
					className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
				>
					View more
					<svg
						aria-hidden='true'
						className='ml-2 -mr-1 w-4 h-4'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
							clip-rule='evenodd'
						></path>
					</svg>
				</a>
			</div>
		</div>
	);
}

export default CardVideo;
