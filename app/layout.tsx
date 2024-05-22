import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
	title: "Where am I?",
	description:
		"A simple tool to find your location's elevation and coordinates.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					GeistSans.className,
					"antialiased",
					"bg-[radial-gradient(ellipse_at_bottom_left,#ff6e7f50,#bfe9ff)]"
				)}
			>
				{children}
			</body>
		</html>
	);
}
