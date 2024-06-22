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
					"bg-gradient-to-t from-[#D4D4D4] to-[#FAFAFA]"
				)}
			>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-400 via-emerald-500 to-green-600 -z-10 opacity-10" />
				{children}
			</body>
		</html>
	);
}
