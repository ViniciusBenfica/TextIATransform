import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "TextIAtransform",
	description: "AI-powered text transformation tool",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
