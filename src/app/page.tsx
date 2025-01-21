import { Footer } from "@/components/ui/footer";
import { Faq } from "./pages/landing/faq";
import { Features } from "./pages/landing/features";
import { Hero } from "./pages/landing/hero";

export default function Home() {
	return (
		<div>
			<Hero />
			<Features />
			<Faq />
			<Footer />
		</div>
	);
}
