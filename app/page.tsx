"use client";

import { Button } from "@/components/ui/button";
import { useGeolocation } from "@uidotdev/usehooks";
import { Loader } from "lucide-react";
import Link from "next/link";

const Page = () => {
	const geo = useGeolocation({ enableHighAccuracy: true });

	return (
		<>
			<div className="container py-24 flex flex-col text-center items-center min-h-svh justify-between">
				<div>
					<h1 className="text-4xl font-bold">Where am I?</h1>
					<h2 className="font-medium text-muted-foreground text-sm">
						A simple tool to find your location's elevation and coordinates.
					</h2>

					<div className="flex flex-col text-center items-center gap-6 mt-12">
						{geo.loading ? <Loader className="animate-spin size-8" /> : null}
						{geo.error ? (
							<>
								<p>
									Enable permissions to access your location data. <br />
									This can be done in your browser settings.
								</p>
								<p className="text-xs text-muted-foreground">
									{geo.error.code}: {geo.error.message}{" "}
								</p>
							</>
						) : null}

						{!geo.loading && !geo.error && (
							<>
								<p>You are at {geo.altitude} meters above sea level.</p>
								<p>
									Your location is ({geo.latitude?.toPrecision(6)},{" "}
									{geo.longitude?.toPrecision(6)}) with an accuracy of{" "}
									{geo.accuracy?.toPrecision(2)} meters.
								</p>

								<Link
									href={`https://www.google.com/maps/search/?api=1&query=${geo.latitude}, ${geo.longitude}`}
									target="_blank"
									rel="noreferrer noopener"
								>
									<Button variant={"link"}>View on Google Maps</Button>
								</Link>

								{/* <iframe
								src={`https://www.google.com/maps/embed/v1/view?key=1&center=${geo.longitude},${geo.latitude}&maptype=satellite&zoom=16`}
								width="600"
								height="450"
								style={{ border: 0 }}
								title="Map"
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe> */}
							</>
						)}
					</div>
				</div>

				<p className="text-sm text-muted-foreground">
					Made with 🥩 by{" "}
					<Link
						href={"https://npitt.dev"}
						target="_blank"
						rel="noreferrer noopener"
						className="underline hover:text-foreground transition-colors"
					>
						Noah Pittman
					</Link>
				</p>
			</div>
		</>
	);
};

export default Page;
