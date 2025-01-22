import { Marquee } from "@/components/ui/marquee";
import { Logos } from "./Logos";

export function MarqueeSection() {
	const arr = [Logos.tailwindcss, Logos.framer, Logos.nextjs, Logos.aws];

	return (
		<Marquee>
			{arr.map((Logo, index) => (
				<div
					key={index}
					className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
				>
					<Logo />
				</div>
			))}
		</Marquee>
	);
}
