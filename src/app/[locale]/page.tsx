'use client'
import HyperText from "@/components/magicui/hyper-text";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Services } from "@/components/Services";
import Image from "next/image";
import { Reveal } from '@/components/generics/Reveal'
import { ServicesAccordion } from "@/components/ServicesAccordion";
import Link from "next/link";
import { Project } from "@/components/Project";
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiReacthookform } from "react-icons/si";
import { redirect, usePathname } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { HeroBanner } from "@/components/landing-general/HeroBanner";
import initTranslations from '@/app/i18n'
import TranslationsPrivider from '@/components/TranslationsProvider'
import { useEffect } from "react";

const services = [
  {
    id: "01",
    body: "Web Apps",
  },
  {
    id: "02",
    body: "Landig Pages",
  },
  {
    id: "03",
    body: "E-Commerce",
  },
  {
    id: "04",
    body: "Blogs",
  },
  {
    id: "05",
    body: "Multiplatform Apps",
  },
  {
    id: "06",
    body: "Deploiment",
  },
];

const i18nNamespaces = ['services']

export default async function Home({ params: { locale }} : { params: { locale: any } }) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsPrivider resources={resources} locale={locale} namespaces={i18nNamespaces} >
      <main>
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
            <h2 className="font-extrabold text-5xl text-center py-20 pb-40 lg:py-40 text-white">My Side Projects</h2>
            <div className="">
              <Project
                reverse={false}
                src="/e-commerce.jpg"
                projectName="The Store"
                description=""
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
                projectName="scheduled"
                description=""
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
                projectName="SebDevBlog"
                description=""
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
      </main>
    </TranslationsPrivider>
  );
}
