import { Footer } from "@/components/ui/footer";
import { Faq } from "./pages/landing/faq";
import { Features } from "./pages/landing/features";
import { Hero } from "./pages/landing/hero";
import { CVTailorHero } from "./pages/landing/cv-tailor-hero/cv-tailor-hero";

export default function Home() {
	return (
		<div>
			<CVTailorHero />
			<Features />
			<Faq />
			<Footer />
		</div>
	);
}
