import React from "react";

const ProfessionalExperience = ({ data }) => {
	const { title, experiences } = data;
	return (
		<section>
			<h2 className='mb-6 text-3xl bg-black text-yellow-400 w-auto px-4 rounded-xl'> {title}</h2>
			<div className='flex flex-col gap-6'>
				{experiences.map(({ role, description, current }) => (
					<div key={role} className='flex hover:bg-red-600 duration-300 flex-col rounded-lg shadow-xl bg-blue-600'>
						<span className={`h-2 ${current ? "bg-blue" : "bg-grey"}`} />
						<div className='p-6 drop-shadow-md bg-blue-400 rounded-lg'>
							<h3>{role}</h3>
							<p className='mt-2'>{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProfessionalExperience;