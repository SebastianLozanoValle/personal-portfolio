import { Reveal } from "@/components/generics/Reveal";
import TypingAnimation from "@/components/magicui/typing-animation";
import { MySkills } from "@/components/MySkills";
import { Services } from "@/components/Services";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { SkillsGlobe } from "@/components/SkillsGlobe";
import Image from "next/image";
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiReacthookform, SiExpo, SiReactrouter, SiVite, SiApollographql, SiMongodb, SiExpress, SiJsonwebtokens, SiCss3 } from "react-icons/si";
import { Project } from "@/components/Project";
import { AboutMe } from "@/components/AboutMe";
import { HeroBanner } from "@/components/landing-general/HeroBanner";
import { toast } from "@/components/ui/use-toast";
import initTranslations from "@/app/i18n";
import TranslationsPrivider from '@/components/TranslationsProvider'
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import Link from "next/link";

const skills = [
    {
      id: "01",
      body: "React",
    },
    {
      id: "02",
      body: "Next.Js",
    },
    {
      id: "@john",
      body: "Redux",
    },
    {
      id: "04",
      body: "Zusand",
    },
    {
      id: "05",
      body: "Supabase",
    },
    {
      id: "06",
      body: "GraphQL-Apollo",
    },
    {
      id: "07",
      body: "Express",
    },
    {
      id: "08",
      body: "Hono.Js",
    },
    {
      id: "09",
      body: "MongoDB",
    },
    {
      id: "10",
      body: "PostgreSQL",
    },
    {
      id: "11",
      body: "MySQL",
    },
    {
      id: "12",
      body: "React Native",
    },
    {
      id: "10",
      body: "Expo",
    },
    {
      id: "10",
      body: "Git",
    },
    {
      id: "10",
      body: "Bash",
    },
  ];

const i18nNamespaces = ['herobanner', 'projects']

export default async function Home({ params: { locale }} : { params: { locale: any } }) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
      <TranslationsPrivider resources={resources} locale={locale} namespaces={i18nNamespaces} >
        <main>
            <div className="overflow-hidden">
                <HeroBanner />
                <Services items = {skills} />
                <div id="skills" className="bg-background dark:bg-pseudoblack dark:text-background">
                    <div className="lg:container flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 py-20 lg:py-40">
                                <MySkills />
                        </div>
                        <div className="w-full lg:w-1/2 py-20 pt-0 lg:py-40">
                            <div className="lg:container mx-auto flex flex-col gap-16 items-center">
                                <SkillsGlobe />
                                <div className="container mx-auto flex justify-center">
                                    <Link href={'/contact'} className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                                      {t('herobanner:worktogether')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="projects" className="">
                  <h2 className="font-extrabold text-5xl text-center py-20 pb-40 lg:py-40 text-white">{t('projects:title')}</h2>
                  <div className="">
                    <Project
                      web="https://art-icon.vercel.app/"
                      reverse={false}
                      src="/thestore_cap.png"
                      projectName={t('projects:projects.1.projectName')}
                      description={t('projects:projects.1.description')}
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
                      src="/e-commerce.jpg"
                      projectName={t('projects:projects.3.projectName')}
                      description={t('projects:projects.3.description')}
                      reverse={true}
                      technologies={[
                        {
                          icon: <FaReact />,
                          name: 'React Native'
                        },
                        {
                          icon: <SiCss3 />,
                          name: 'CSS'
                        },
                        {
                          icon: <SiExpo />,
                          name: 'Expo'
                        },
                        {
                          icon: <BiLogoTypescript />,
                          name: 'TypeScript'
                        },
                        {
                          icon: <RiTailwindCssFill />,
                          name: 'Nativewind'
                        },
                        {
                          icon: <RiSupabaseFill />,
                          name: 'Supabase'
                        },
                        {
                          icon: <SiReacthookform />,
                          name: 'React-Hook-Form'
                        },
                      ]}
                    />
                  </div>
                </div>
                <AboutMe />
            </div>
        </main>
      </TranslationsPrivider>
    )
}