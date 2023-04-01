import Image from "next/image";
import React from "react";

import { Envelope, Twitter, Linkedin, Medium } from "./icons";

const Sidebar = ({ data }) => {
	const { name, role, education, contactLinks } = data;

	return (
		<div className='bg-green-700 flex flex-col content-between mb-8 w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed'>
			<div className='text-white flex flex-col p-10'>
				<div className="flex flex-col items-center">
				<Image
					priority
					width={200}
					height={100}
					className='rounded-full h-full mb-6'
					src='/Shahid-Islam.jpg'
					alt='Shahid Islam.jpg'
					aria-label='Shahid Islam.jpg'
				/>
				<h1 className='mb-2'>{name}</h1>
				<h2 className='mb-8'>{role}</h2>
				</div>
				<p className='mb-2 hover:scale-105 duration-200'>{education[0]}</p>
				<p className='mb-2 hover:scale-105 duration-200'>{education[1]}</p>
				<p className='mb-2 hover:scale-105 duration-200'>{education[2]}</p>
				<p className='mb-2 hover:scale-105 duration-200'>{education[3]}</p>
				<div className='text-white text-center mb-4 mt-4 sm:mt-8'>
				
					<div className='flex flex-row justify-center gap-2'>
						<a
							className='icons-contactme hover:bg-yellow-600 duration-200'
							href={contactLinks?.[0]}
							aria-label={"email link"}
						>
							<Envelope />
						</a>
						<a
							className='icons-contactme hover:bg-blue-600 duration-200'
							href={contactLinks?.[1]}
							aria-label={"twitter link"}
						>
							<Twitter />
						</a>

						<a
							className='icons-contactme hover:bg-red-600 duration-200'
							href={contactLinks?.[2]}
							aria-label={"linkedin link"}
						>
							<Linkedin />
						</a>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
