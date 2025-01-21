import { en } from "@/app/dictionaries/en";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

// export const Faq: FC = () => {
// 	const { faqs } = en.pages.landing;
// 	return (
// 		<div className="flex flex-col items-center gap-y-12">
// 			<div className="text-6xl font-bold">FAQ</div>
// 			<Accordion type="single" collapsible className="w-7/12">
// 				{faqs?.map((faq, index) => (
// 					<AccordionItem value={`item-${index}`} key={index}>
// 						<AccordionTrigger>{faq.title}</AccordionTrigger>
// 						<AccordionContent>{faq.description}</AccordionContent>
// 					</AccordionItem>
// 				))}
// 			</Accordion>
// 		</div>
// 	);
// };

export function Faq() {
	const { faqs } = en.pages.landing;
	return (
		<section
			id="faq"
			className="py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="inline-block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
						Frequently Asked Questions
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
				</div>
				<div className="max-w-3xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-6">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="text-left text-gray-700 hover:text-gray-900">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-gray-600">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
