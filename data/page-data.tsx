import Image from "next/image";
import dc from "../public/dc.jpg";
import fdp from "../public/fdp.jpg";
import fjdc from "../public/fjdc.jpg";
import fiverr from "../public/fiverr.png";
import piaic from "../public/piaic.png";
import sv from "../public/sv.jpg";
export const personalData = {
	name: "Dr Shahid Islam",
	role: "Consultant Endodontist and Restorative Specialist/ IT Professional",
	education: [
		"Bachelor of Dental Surgery, Dow University of Health Sciences (2009-2014)",
		"FCPS, College of Physicians and Surgeons Pakistan (2017-2021)",
		"Diploma Implantology, MICDE (2018)",
		"CHPE, Baqai University (2022-2023)"

	],
	contactLinks: [
		"mailto:emailto:shahidislam14@gmail.com",
		"https://twitter.com/drshahidislam",
		"https://linkedin.com/shahid-islam-a2544922b",
	],
};

export const aboutMe = {
	title: "About Me",
	body: [
		"As a highly motivated and driven individual with a passion for making a positive impact, I have a unique blend of technical and interpersonal skills, thanks to my background in computer science. I am able to tackle complex problems with ease, and I never lose sight of my ultimate goal, even when facing challenges.",
		"When I'm not working, I love hiking, reading, and spending time with my friends and family. I believe that my determination, can-do attitude, and hard work make me a true asset to any team.",
	],
};

export const skills = {
	Endodontist: [
		{ icon: "👂🏼", text: "Root Canal Treatment" },
		{ icon: "💬", text: "Dental Fillings" },
		{ icon: "👥", text: "Dental Implants" },
		{ icon: "⽓", text: "Veneers" },
		{ icon: "💡", text: "Fixed Prosthesis" },
		{ icon: "⌛️", text: "Braces" },
	],
	Developer: [
		{ icon: "💻", text: "Python" },
		{ icon: "ʦ", text: "TypeScript" },
		{ icon: "🚀", text: "NextJS" },
		{ icon: "💾", text: "Wordpress" },
		{ icon: "💾", text: "Shopify" },
		{ icon: "📈", text: "Javascript" },
	],
};

export const endodontistData = {
	title: "Professional Experience",
	experiences: [
		{
			role: "Assistant Professor - Fatima Jinnah Dental College, Karachi (2021-Present)",
			description:
				"I am serving as an Assistant Professor in Operative Dentistry Department of Fatima Jinnah Dental College Hospital Karachi",
			pc: <Image src={fjdc} alt='Shahid'></Image> ,
			current: true,
		},

		{
			role: "Associate Dentist - Fazal Dental Clinic (2015-Present)",
			description:
				"I have been working as an associate dentist and specialist endodontist at Dr Fazal's Dental Clinic in DHA, Phase 5, Karachi",
			pc: <Image src={fdp} alt='Shahid'></Image>,
			current: true,
		},
		{
			role: "Dr Shahid Islam Dental Clinic (2022-Present)",
			description:

				"Recently I have started my own practice in Gulshan Block 1 with my name.",
			pc: <Image src={dc} alt='Shahid' width={256}></Image>,
			current: true,
		},
	],
};
export const webDeveloperData = {
	title: "Professional Experience",
	experiences: [
		{
			role: "Web 3.0 and Metaverse Student (Sept 2022-Present)",
			description:
				"I am pursuing a course in web 3.0 and metaverse from PIAIC.",
			pc: <Image src={piaic} alt='Shahid' width={256}></Image>,
			current: true,
		},

		{
			role: "Level one Seller on Fiverr (Wordpress/Shopify)",
			description:
				"I have been rated as Level one seller on Fiverr platform for providing my services related to Shopify and Wordpress",
			pc: <Image src={fiverr} alt='Shahid' width={256}></Image>,
			current: true,
		},
		{
			role: "Senior Technical Support Manager - Sindhvirsa.com",
			description:
				"I have been serving as a chief technical officer at sindhvirsa.com since its inception",
			pc: <Image src={sv} alt='Shahid' width={256}></Image>,
				current: true,
		},
	],
};