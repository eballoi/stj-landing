import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/ui/footer";
import { CVTailorHero } from "./pages/landing/cv-tailor-hero/cv-tailor-hero";
import { Faq } from "./pages/landing/faq";
import { Features } from "./pages/landing/features";
import { MarqueeSection } from "./pages/landing/marquee/MarqueeSection";

export default function Home() {
	return (
		<div>
			<FloatingNavbar />
			<CVTailorHero />
			<MarqueeSection />
			<Features />
			<Faq />
			<Footer />
		</div>
	);
}
