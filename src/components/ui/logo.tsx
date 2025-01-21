import { en } from "@/app/dictionaries/en";
import { FC } from "react";

export const Logo: FC<{ size: number }> = ({ size }) => {
	const { appName } = en;
	return (
		<div className="flex flex-row items-center gap-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 120 120"
				width="120"
				height="120"
				className={`h-${size} w-${size}`}
			>
				<rect x="0" y="0" width="120" height="120" rx="15" fill="#DAB6FF" />
				<rect x="20" y="35" width="80" height="50" rx="10" fill="#000" />
				<rect x="70" y="40" width="20" height="30" rx="2" fill="#DAB6FF" />
				<line x1="73" y1="45" x2="87" y2="45" stroke="#000" strokeWidth="1.5" />
				<line x1="73" y1="50" x2="87" y2="50" stroke="#000" strokeWidth="1.5" />
				<line x1="73" y1="55" x2="87" y2="55" stroke="#000" strokeWidth="1.5" />
				<rect x="30" y="50" width="30" height="15" rx="2" fill="#DAB6FF" />
			</svg>
			<span className="font-bold text-xl">{appName}</span>
		</div>
	);
};
