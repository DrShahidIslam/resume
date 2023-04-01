import "./globals.css";

import Sidebar from "./components/sidebar";
import { personalData } from "../data/page-data";
import Skills from "./components/skills";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head>
				<meta name="title" content="Dr Shahid Islam" />
				<meta name="description" content="Portfolio Website of Dr Shahid Islam" />
			</head>

			<body className='flex flex-col sm:flex-row'>
				<Sidebar data={personalData} />
				<Skills/>
				<main className='grow-full w-full sm:basis-2/3  ml-auto'>
					{children}
				</main>
			</body>
		</html>
	);
}