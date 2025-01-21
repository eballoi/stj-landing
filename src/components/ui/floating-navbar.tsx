"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "Home", href: "/#home" },
	{ name: "Features", href: "/#features" },
	{ name: "Pricing", href: "/#pricing" },
	{ name: "Faq", href: "/#faq" },
];

export function FloatingNavbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		const observerOptions = {
			root: null,
			rootMargin: "-50% 0px -50% 0px",
			threshold: 0,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);

		navItems.forEach((item) => {
			const element = document.getElementById(item.href.slice(2));
			if (element) observer.observe(element);
		});

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			observer.disconnect();
		};
	}, []);

	return (
		<div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
			<nav
				className={`flex items-center justify-between p-2 rounded-full transition-all duration-300 ${
					isScrolled
						? "bg-white/90 backdrop-blur-md shadow-lg"
						: "bg-white/50 backdrop-blur-sm"
				}`}
			>
				<Link href="/#home" className="text-xl font-bold text-gray-900 px-4">
					CVTailor
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-1">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={`px-4 py-2 text-gray-700 rounded-full transition-colors ${
								activeSection === item.href.slice(2)
									? "bg-gray-200 text-gray-900"
									: "hover:bg-gray-100 hover:text-gray-900"
							}`}
						>
							{item.name}
						</Link>
					))}
					<Button className="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 rounded-full">
						Sign Up
					</Button>
				</div>

				{/* Mobile Navigation */}
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden rounded-full"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-[300px] sm:w-[400px]">
						<SheetTitle />
						<nav className="flex flex-col h-full">
							<div className="flex items-center justify-between mb-8">
								<Link
									href="/#home"
									className="text-2xl font-bold text-gray-900"
								>
									CVTailor
								</Link>
								<SheetTrigger asChild>
									<Button variant="ghost" size="icon" className="rounded-full">
										<X className="h-5 w-5" />
										<span className="sr-only">Close menu</span>
									</Button>
								</SheetTrigger>
							</div>
							<div className="space-y-4 flex-grow">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={`block px-4 py-2 text-lg rounded-full transition-colors ${
											activeSection === item.href.slice(2)
												? "bg-gray-200 text-gray-900"
												: "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
										}`}
									>
										{item.name}
									</Link>
								))}
							</div>
							<Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 rounded-full mt-8">
								Sign Up
							</Button>
						</nav>
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
}
