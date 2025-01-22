"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { IconName } from "lucide-react/dynamic";
import Image from "next/image";
import { FC } from "react";

const content = [
	{
		title: "Upload your current resume",
		iconName: "upload" as IconName,
		description:
			"Ready to transform your career? Start by uploading your current CV — it’s quick, easy, and completely hassle-free. Think of it as handing over your resume to your personal career stylist. We take what’s great about you and prepare it for a spotlight moment.",
		color: "rgb(0 0 0)",
		content: (
			<div className="h-full w-full flex items-center justify-center text-white">
				<Image
					src="/images/feature-1.png"
					width={400}
					height={300}
					className="h-full w-full object-contain"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "Paste the job description",
		iconName: "copy" as IconName,
		description:
			"Found your dream job? Paste the job description into our platform, and let us work our magic. In seconds, we analyze the key skills, requirements, and qualifications that employers are looking for. It’s like decoding the secret language of job offers—so your CV speaks their exact lingo.",
		color: "#fff",
		content: (
			<div className="h-full w-full flex items-center justify-center text-white">
				<Image
					src="/images/feature-2.png"
					width={400}
					height={300}
					className="h-full w-full object-contain"
					alt="linear board demo"
				/>
			</div>
		),
	},
	{
		title: "Download your tailored CV",
		iconName: "download" as IconName,
		description:
			"Now, sit back and enjoy the result. With just one click, download your revamped CV, perfectly tailored to the job you want. No fluff, no guesswork—just a razor-sharp resume designed to make you stand out and land that interview. Ready to impress? Let’s do this!",
		color: "rgb(0 0 0)",
		content: (
			<div className="h-full w-full flex items-center justify-center text-white">
				<Image
					src="/images/feature-2.png"
					width={400}
					height={300}
					className="h-full w-full object-contain"
					alt="linear board demo"
				/>
			</div>
		),
	},
];

export const Features: FC = () => {
	return (
		<section id="features">
			<StickyScroll content={content} />
		</section>
	);
};
