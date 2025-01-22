import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/ui/footer";
import { CVTailorHero } from "./pages/landing/cv-tailor-hero/cv-tailor-hero";
import { Faq } from "./pages/landing/faq";
import { Features } from "./pages/landing/features";

export default function Home() {
	return (
		<div>
			<FloatingNavbar />
			<CVTailorHero />
			<Features />
			<Faq />
			<Footer />
		</div>
	);
}
