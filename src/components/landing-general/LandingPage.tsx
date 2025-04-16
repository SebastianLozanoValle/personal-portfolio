'use client'

import { BiLogoTypescript } from "react-icons/bi"
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAmazondynamodb, SiApollographql, SiAwslambda, SiClerk, SiCss3, SiExpo, SiExpress, SiJsonwebtokens, SiMongodb, SiReacthookform, SiReactrouter, SiShadcnui, SiVite } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"
import { Project } from "../Project"
import { HeroBanner } from "./HeroBanner"
import { Services } from "../Services"
import { ServicesAccordion } from "../ServicesAccordion"
import { useTranslation } from "react-i18next"
import { FaAws, FaReact, FaStripe } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import Link from "next/link"
import { FaFlutter } from "react-icons/fa6"
import { IoLogoAmplify } from "react-icons/io5"
import { FaGolang } from "react-icons/fa6"

export const LandingPage = ({services}: { services: any }) => {

    const { t } = useTranslation();
    
    return (
        <div className="overflow-hidden">
          <HeroBanner />
          <Services items = {services} />
          <div id="services" className="bg-background dark:bg-pseudoblack dark:text-background">
            <div className="lg:container flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 py-20 lg:py-40">
                <div className="container mx-auto flex flex-col gap-16">
                  <h2 className="text-5xl font-extrabold">
                    {t("servicesSection.title")}
                  </h2>
                  <p>
                    {t("servicesSection.description")}
                  </p>
                  <Link href={'/contact'} className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                    {t("servicesSection.button")}
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-20 pt-0 lg:py-40">
                <div className="container mx-auto flex flex-col gap-16">
                  <ServicesAccordion />
                </div>
              </div>
            </div>
          </div>
          <div id="projects" className="">
            <h2 className="font-extrabold text-5xl text-center py-20 pb-40 lg:py-40 text-white">{t('projects:title')}</h2>
            <div className="">
              <Project
                web="https://app.afecorp.com.co"
                reverse={false}
                src="/afecorp.png"
                projectName={t('projects:projects.1.projectName')}
                description={t('projects:projects.1.description')}
                technologies={[
                  {
                    icon: <RiNextjsFill />,
                    name: 'Next.js'
                  },
                  {
                    icon: <FaAws />,
                    name: 'AWS'
                  },
                  {
                    icon: <SiAwslambda />,
                    name: 'AWS Lambda'
                  },
                  {
                    icon: <FaStripe />,
                    name: 'Stripe'
                  },
                  {
                    icon: <RiTailwindCssFill />,
                    name: 'Tailwind'
                  },
                  {
                    icon: <TbBrandFramerMotion />,
                    name: 'Framer Motion'
                  },
                  {
                    icon: <SiClerk />,
                    name: 'Clerk'
                  },
                  {
                    icon: <SiShadcnui />,
                    name: 'Shadcn'
                  },
                  {
                    icon: <SiExpress />,
                    name: 'Express.js'
                  },
                  {
                    icon: <SiAmazondynamodb />,
                    name: 'Amazon DynamoDB'
                  },
                ]}
              />
              <Project
                web="https://vermillion-meringue-1bb547.netlify.app/"
                src="/scheduled_cap.png"
                projectName={t('projects:projects.2.projectName')}
                description={t('projects:projects.2.description')}
                reverse={true}
                technologies={[
                  {
                    icon: <FaReact />,
                    name: 'Reactjs'
                  },
                  {
                    icon: <SiCss3 />,
                    name: 'CSS'
                  },
                  {
                    icon: <SiVite />,
                    name: 'Vite'
                  },
                  {
                    icon: <BiLogoTypescript />,
                    name: 'TypeScript'
                  },
                  {
                    icon: <RiTailwindCssFill />,
                    name: 'Tailwind'
                  },
                  {
                    icon: <SiReactrouter />,
                    name: 'React-Router-Dom'
                  },
                  {
                    icon: <SiReacthookform />,
                    name: 'React-Hook-Form'
                  },
                  {
                    icon: <SiMongodb />,
                    name: 'MongoDB'
                  },
                  {
                    icon: <GrGraphQl />,
                    name: 'GraphQL'
                  },
                  {
                    icon: <SiApollographql />,
                    name: 'Apollo-Client/Server'
                  },
                  {
                    icon: <SiExpress />,
                    name: 'Express.js'
                  },
                  {
                    icon: <SiJsonwebtokens />,
                    name: 'JWT'
                  },
                ]}
              />
              <Project
                web="https://www.sledevelopment.com/"
                reverse={false}
                src="/sle_cap.png"
                projectName={t('projects:projects.4.projectName')}
                description={t('projects:projects.4.description')}
                technologies={[
                  {
                    icon: <RiNextjsFill />,
                    name: 'Next.js'
                  },
                  {
                    icon: <SiCss3 />,
                    name: 'CSS'
                  },
                  {
                    icon: <BiLogoTypescript />,
                    name: 'TypeScript'
                  },
                  {
                    icon: <RiTailwindCssFill />,
                    name: 'Tailwind'
                  },
                  {
                    icon: <TbBrandFramerMotion />,
                    name: 'Framer Motion'
                  },
                  {
                    icon: <SiReacthookform />,
                    name: 'React-Hook-Form'
                  },
                ]}
              />
              <Project
                web=""
                src="/ai-talent.png"
                projectName={t('projects:projects.3.projectName')}
                description={t('projects:projects.3.description')}
                reverse={true}
                technologies={[
                  {
                    icon: <RiNextjsFill />,
                    name: 'Next.js'
                  },
                  {
                    icon: <RiTailwindCssFill />,
                    name: 'Tailwind'
                  },
                  {
                    icon: <FaFlutter />,
                    name: 'Flutter'
                  },
                  {
                    icon: <FaAws />,
                    name: 'AWS'
                  },
                  {
                    icon: <SiAwslambda />,
                    name: 'AWS Lambda'
                  },
                  {
                    icon: <IoLogoAmplify />,
                    name: 'Amplify'
                  },
                  {
                    icon: <FaGolang />,
                    name: 'Golang'
                  },
                  {
                    icon: <SiShadcnui />,
                    name: 'Shadcn'
                  },
                ]}
              />
            </div>
          </div>
        </div>
    )
}