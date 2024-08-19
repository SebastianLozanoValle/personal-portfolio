import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function ServicesAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="border-gray-400" value="item-1">
          <AccordionTrigger className="pb-8 hover:no-underline AccordionTrigger group">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">What is a Web App?</h2>
          </AccordionTrigger>
          <AccordionContent className="">
            A web app is an application accessible through a web browser, designed to perform specific tasks or solve problems online. Unlike traditional software, it doesn&APOS;t require installation and can be accessed from any device with internet access.
            <br />
            Web apps are ideal for businesses looking to streamline operations, enhance customer engagement, or provide services online. They are especially useful for entrepreneurs, small businesses, or organizations that need a scalable, cost-effective solution to manage their activities, reach a broader audience, or offer a seamless user experience across different platforms.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-gray-400" value="item-2">
          <AccordionTrigger className="pb-8 hover:no-underline AccordionTrigger group">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">What is Landing Page?</h2>
          </AccordionTrigger>
          <AccordionContent className="">
            A landing page is typically standalone and designed with a single goal in mind, making it highly effective for marketing campaigns.
            <br />
            For businesses, a landing page is a great tool to drive conversions and gather leads. It is especially useful when launching a new product, running a promotion, or targeting a specific audience segment. Additionally, a well-optimized landing page can greatly improve your SEO (Search Engine Optimization), making it easier for potential customers to find your business online. By ranking higher in search engine results, your business can attract more visitors, leading to increased sales and brand awareness
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-gray-400" value="item-3">
          <AccordionTrigger className="pb-8 hover:no-underline AccordionTrigger group">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">What is E-Commerce?</h2>
          </AccordionTrigger>
          <AccordionContent className="">
            An e-commerce website is an online platform where businesses can sell products or services directly to customers. It allows you to reach a global audience, operate 24/7, and provide a seamless shopping experience. With features like product catalogs, shopping carts, and secure payment gateways, an e-commerce site makes it easy for customers to browse, select, and purchase items from the comfort of their homes.
            <br />
            For businesses, having an e-commerce site is a powerful way to increase sales and build brand loyalty. It’s especially beneficial for companies looking to expand their market reach without the limitations of a physical store. Additionally, by integrating SEO strategies, your e-commerce site can rank higher in search engine results, driving more traffic and potential sales to your business. With tools for tracking customer behavior and preferences, you can also create personalized shopping experiences, further boosting customer satisfaction and retention
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  