import { en } from "@/app/dictionaries/en";
import Image from "next/image";
import { FC } from "react";

export const Logo: FC<{ size: number }> = ({ size }) => {
	const { appName } = en;
	return (
		<div className="flex flex-row items-center gap-4">
			<Image
				src={"/logo-stj.png"}
				alt={"stj-logo"}
				width={size}
				height={size}
			/>
			<span className="font-bold text-l">{appName}</span>
		</div>
	);
};
