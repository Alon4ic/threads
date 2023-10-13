
import { Inter } from 'next/font/google';
import { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Threads",
	description: "A Nexxt.js 13 Meta Threads Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
		>
			<html lang='en'>
				<body className={`${inter.className} bg-dark-1`}>{children}</body>
			</html>
		</ClerkProvider>
	);
}