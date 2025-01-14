"use client";

import { en } from "@/app/dictionaries/en";
import { HeroSection } from "@/app/pages/landing/components/HeroSection";
import { FC } from "react";

export const Hero: FC = () => {
	const { hero } = en.pages.landing;
	return (
		<HeroSection
			badge={{
				text: "Join the waitlist",
				action: {
					text: "Learn more",
					href: "/docs",
				},
			}}
			title={hero.heading}
			description={hero.description}
			image={{
				light: "/images/app-light.png",
				dark: "/images/app-dark.png",
				alt: "SnipeThatJob UI preview",
			}}
		/>
	);
};
