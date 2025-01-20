"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { GradientText } from "./gradient-text";

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		color?: string;
		description: string;
		iconName?: IconName;
		content?: React.ReactNode;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		container: ref,
		offset: ["start start", "end start"],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0
		);
		setActiveCard(closestBreakpointIndex);
	});

	const backgroundColors = [
		"rgb(255 255 255)",
		"rgb(0 0 0)",
		"rgb(255 255 255)",
	];

	const linearGradients = [
		"linear-gradient(to bottom right, transparent, transparent)", // cyan-500 to emerald-500
		"linear-gradient(to bottom right, transparent, transparent)", // pink-500 to indigo-500
		"linear-gradient(to bottom right, transparent, transparent)", // orange-500 to yellow-500
	];

	const [backgroundGradient, setBackgroundGradient] = useState(
		linearGradients[0]
	);

	useEffect(() => {
		setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
	}, [activeCard]);

	return (
		<motion.div
			animate={{
				backgroundColor: backgroundColors[activeCard % backgroundColors.length],
			}}
			className="h-screen overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
			ref={ref}
		>
			<div className="h-screen div relative flex items-start px-4">
				<div className="max-w-3xl">
					{content.map((item, index) => (
						<div
							key={item.title + index}
							className="my-20 h-[50rem] space-y-10"
						>
							{item.iconName && (
								<DynamicIcon
									name={item.iconName}
									size={64}
									color={item.color}
								/>
							)}
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
							>
								<GradientText
									animationSpeed={3}
									className={`text-6xl font-bold text-[${item.color}] text-left`}
								>
									{item.title}
								</GradientText>
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className={`text-kg text-2xl leading-loose mt-10 text-[${item.color}]`}
							>
								{item.description}
							</motion.p>
						</div>
					))}
					<div className="h-40" />
				</div>
			</div>
			<div
				style={{ background: backgroundGradient }}
				className={cn(
					"hidden lg:block h-96 w-4/12 rounded-md bg-white sticky top-10 overflow-hidden",
					contentClassName
				)}
			>
				{content[activeCard].content ?? null}
			</div>
		</motion.div>
	);
};
