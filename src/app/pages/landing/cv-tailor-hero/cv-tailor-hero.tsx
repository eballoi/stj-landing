import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText, Zap } from "lucide-react";

export function CVTailorHero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
			<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
			<div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32">
				<div className="flex flex-col lg:flex-row items-center">
					<div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
							Tailor Your CV to
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
								{" "}
								Land Your Dream Job
							</span>
						</h1>
						<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
							Our AI-powered platform analyzes job descriptions and optimizes
							your CV in seconds. Stand out from the crowd and increase your
							chances of getting hired.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button
								size="lg"
								className="bg-purple-600 hover:bg-purple-700 text-white"
							>
								Get Started
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-purple-600 text-purple-600 hover:bg-purple-100"
							>
								Learn More
							</Button>
						</div>
					</div>
					<div className="flex-1 relative">
						<div className="relative z-10 bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-md mx-auto">
							<div className="absolute -top-4 -left-4 bg-purple-600 rounded-full p-3">
								<Zap className="h-6 w-6 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Instant CV Optimization
							</h3>
							<p className="text-gray-600 mb-6">
								Upload your CV and paste the job description to get tailored
								suggestions in seconds.
							</p>
							<div className="space-y-4">
								<div>
									<Input
										type="file"
										accept=".pdf,.doc,.docx"
										className="cursor-pointer"
									/>
								</div>
								<div>
									<Input
										placeholder="Paste job description here"
										className="h-24"
									/>
								</div>
								<Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
									<FileText className="mr-2 h-5 w-5" />
									Optimize My CV
								</Button>
							</div>
						</div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 -z-10"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
