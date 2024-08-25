'use client'

import { BiLogoTypescript } from "react-icons/bi"
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri"
import { SiReacthookform } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"
import { Project } from "../Project"
import { HeroBanner } from "./HeroBanner"
import { Services } from "../Services"
import { ServicesAccordion } from "../ServicesAccordion"
import { useTranslation } from "react-i18next"

export const LandingPage = ({services}: { services: any }) => {

    const { t } = useTranslation();
    
    return (
        <div className="overflow-hidden">
          <HeroBanner />
          <Services items = {services} />
          <div className="bg-background dark:bg-pseudoblack dark:text-background">
            <div className="lg:container flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 py-20 lg:py-40">
                <div className="container mx-auto flex flex-col gap-16">
                  <h2 className="text-5xl font-extrabold">
                    {t("servicesSection.title")}
                  </h2>
                  <p>
                    {t("servicesSection.description")}
                  </p>
                  <button className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                    {t("servicesSection.button")}
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-20 pt-0 lg:py-40">
                <div className="container mx-auto flex flex-col gap-16">
                  <ServicesAccordion />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="font-extrabold text-5xl text-center py-20 pb-40 lg:py-40 text-white">{t('projects:title')}</h2>
            <div className="">
              <Project
                reverse={false}
                src="/e-commerce.jpg"
                projectName={t('projects:projects.1.projectName')}
                description={t('projects:projects.1.description')}
                technologies={[
                  {
                    icon: <RiNextjsFill />,
                    name: 'Next.js'
                  },
                  {
                    icon: <RiSupabaseFill />,
                    name: 'Supabase'
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
                src="/e-commerce.jpg"
                projectName={t('projects:projects.2.projectName')}
                description={t('projects:projects.2.description')}
                reverse={true}
                technologies={[
                  {
                    icon: <RiNextjsFill />,
                    name: 'Next.js'
                  },
                  {
                    icon: <RiSupabaseFill />,
                    name: 'Supabase'
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
                reverse={false}
                src="/e-commerce.jpg"
                projectName={t('projects:projects.3.projectName')}
                description={t('projects:projects.3.description')}
                technologies={[
                  {
                    icon: <RiNextjsFill />,
                    name: 'Next.js'
                  },
                  {
                    icon: <RiSupabaseFill />,
                    name: 'Supabase'
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
            </div>
          </div>
        </div>
    )
}