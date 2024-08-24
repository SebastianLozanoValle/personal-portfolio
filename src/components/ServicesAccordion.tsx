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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">What&apos;s a Web App?</h2>
          </AccordionTrigger>
          <AccordionContent className="">
            A web app is an application accessible through a web browser, designed to perform specific tasks or solve problems online. Unlike traditional software, it doesn&apos;t require installation and can be accessed from any device with internet access.
            <br />
            Web apps are ideal for businesses looking to streamline operations, enhance customer engagement, or provide services online. They are especially useful for entrepreneurs, small businesses, or organizations that need a scalable, cost-effective solution to manage their activities, reach a broader audience, or offer a seamless user experience across different platforms.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-gray-400" value="item-2">
          <AccordionTrigger className="pb-8 hover:no-underline AccordionTrigger group">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">What&apos;s a Landing Page?</h2>
          </AccordionTrigger>
          <AccordionContent className="">
            A landing page is typically standalone and designed with a single goal in mind, making it highly effective for marketing campaigns.
            <br />
            For businesses, a landing page is a great tool to drive conversions and gather leads. It is especially useful when launching a new product, running a promotion, or targeting a specific audience segment. Additionally, a well-optimized landing page can greatly improve your SEO (Search Engine Optimization), making it easier for potential customers to find your business online. By ranking higher in search engine results, your business can attract more visitors, leading to increased sales and brand awareness
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-gray-400" value="item-3">
          <AccordionTrigger className="pb-8 hover:no-underline AccordionTrigger group">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">What&apos;s a E-Commerce?</h2>
          </AccordionTrigger>
          <AccordionContent className="">
            An e-commerce website is an online platform where businesses can sell products or services directly to customers. It allows you to reach a global audience, operate 24/7, and provide a seamless shopping experience. With features like product catalogs, shopping carts, and secure payment gateways, an e-commerce site makes it easy for customers to browse, select, and purchase items from the comfort of their homes.
            <br />
            For businesses, having an e-commerce site is a powerful way to increase sales and build brand loyalty. It’s especially beneficial for companies looking to expand their market reach without the limitations of a physical store. Additionally, by integrating SEO strategies, your e-commerce site can rank higher in search engine results, driving more traffic and potential sales to your business. With tools for tracking customer behavior and preferences, you can also create personalized shopping experiences, further boosting customer satisfaction and retention
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-gray-400" value="item-4">
          <AccordionTrigger className="pb-8 hover:no-underline AccordionTrigger group">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">Why do I need a Blog?</h2>
          </AccordionTrigger>
          <AccordionContent className="">
          A blog is an essential tool for businesses looking to build a strong online presence and connect with their audience. It allows you to share valuable content, establish your expertise, and engage with potential customers on a more personal level. Regularly updating your blog with informative and relevant posts can drive traffic to your website, improve your SEO rankings, and position your brand as a thought leader in your industry.
          <br />
          For businesses, a blog also offers an opportunity to build trust and credibility with your audience. By providing insights, tips, and solutions that address your customers need&apos;s, you can create a loyal following that sees your brand as a go-to resource. Additionally, a well-maintained blog can generate leads and support your overall marketing strategy by promoting your products or services in a more organic and less intrusive way
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="border-gray-400" value="item-5">
          <AccordionTrigger className="pb-8 hover:no-underline AccordionTrigger group">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 group-hover:text-transparent">Benefits of a multiplatform app?</h2>
          </AccordionTrigger>
          <AccordionContent className="">
          <strong>Why limit your app to just Android or iOS when you can have it on both?</strong> A multiplatform app allows businesses to reach a wider audience by being accessible on various operating systems like iOS, Android, and the web. Instead of developing separate apps for each platform, a single codebase can be used, reducing development time and costs. This approach ensures a consistent user experience across all devices, making it easier for users to engage with your brand no matter what device they use.
          <br />
          For businesses, a multiplatform app also simplifies maintenance and updates, as changes can be deployed simultaneously across all platforms. This leads to faster iterations and the ability to respond quickly to user feedback or market changes. Additionally, with a broader reach and lower development overhead, businesses can maximize their return on investment while delivering a seamless and cohesive experience to all users
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  