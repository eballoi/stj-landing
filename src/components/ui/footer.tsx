import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
	return (
		<footer className="bg-gray-100 border-t">
			<div className="container mx-auto px-4 py-8 md:py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<Link href="/" className="flex items-center mb-4">
							<Logo size={48} />
						</Link>
						<p className="text-gray-600 mb-4">
							Join our waitlist to get early access!
						</p>
						<div className="flex space-x-2">
							<Input
								type="email"
								placeholder="Enter your email"
								className="max-w-[200px]"
							/>
							<Button>Join Waitlist</Button>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-gray-600 hover:text-gray-900"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/features"
									className="text-gray-600 hover:text-gray-900"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="/pricing"
									className="text-gray-600 hover:text-gray-900"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-600 hover:text-gray-900"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Legal</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/terms"
									className="text-gray-600 hover:text-gray-900"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-gray-600 hover:text-gray-900"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/cookies"
									className="text-gray-600 hover:text-gray-900"
								>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-600 text-sm mb-4 md:mb-0">
						© {new Date().getFullYear()} AircrafterCV. All rights reserved.
					</p>
					<div className="flex space-x-4">
						<Link href="#" className="text-gray-600 hover:text-gray-900">
							<Facebook size={20} />
						</Link>
						<Link href="#" className="text-gray-600 hover:text-gray-900">
							<Twitter size={20} />
						</Link>
						<Link href="#" className="text-gray-600 hover:text-gray-900">
							<Instagram size={20} />
						</Link>
						<Link href="#" className="text-gray-600 hover:text-gray-900">
							<Github size={20} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
