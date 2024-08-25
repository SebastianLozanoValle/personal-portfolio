import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ServicesAccordion() {
  const { t } = useTranslation();
  const servicesAccordion = [
    {
      id: "item-1",
      title: t("servicesAccordion.webApp.title"),
      content: [
        t("servicesAccordion.webApp.content.part1"),
        t("servicesAccordion.webApp.content.part2")
      ]
    },
    {
      id: "item-2",
      title: t("servicesAccordion.landingPage.title"),
      content: [
        t("servicesAccordion.landingPage.content.part1"),
        t("servicesAccordion.landingPage.content.part2")
      ]
    },
    {
      id: "item-3",
      title: t("servicesAccordion.eCommerce.title"),
      content: [
        t("servicesAccordion.eCommerce.content.part1"),
        t("servicesAccordion.eCommerce.content.part2")
      ]
    },
    {
      id: "item-4",
      title: t("servicesAccordion.blog.title"),
      content: [
        t("servicesAccordion.blog.content.part1"),
        t("servicesAccordion.blog.content.part2")
      ]
    },
    {
      id: "item-5",
      title: t("servicesAccordion.multiplatformApp.title"),
      content: [
        t("servicesAccordion.multiplatformApp.content.part1"),
        t("servicesAccordion.multiplatformApp.content.part2")
      ]
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {servicesAccordion.map((item) => (
        <AccordionItem key={item.id} className="border-gray-400" value={item.id}>
          <AccordionTrigger className="pb-8 hover:no-underline AccordionTrigger group">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">
              {item.title}
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            {item.content.map((text, index) => (
              <div key={index} className="text-justify lg:text-left">
                {text}
                <br />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
