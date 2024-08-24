'use client'
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
import { SiReacthookform } from "react-icons/si";
import { Project } from "@/components/Project";
import { AboutMe } from "@/components/AboutMe";
import { HeroBanner } from "@/components/landing-general/HeroBanner";
import { toast } from "@/components/ui/use-toast";

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

export default function Home() {

  // toast({
  //   title: "Welcom Recruiter!!",
  //   className: "bg-gradient-to-r from-purple-500 to-orange-400 text-background",
  // });

  return (
        <main>
            <div className="overflow-hidden">
                <HeroBanner />
                <Services items = {skills} />
                <div className="bg-background dark:bg-pseudoblack dark:text-background">
                    <div className="lg:container flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 py-20 lg:py-40">
                                <MySkills />
                        </div>
                        <div className="w-full lg:w-1/2 py-20 pt-0 lg:py-40">
                            <div className="lg:container mx-auto flex flex-col gap-16 items-center">
                                <SkillsGlobe />
                                <div className="container mx-auto flex justify-center">
                                    <button className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                                      LET&apos;S WORK TOGETHER
                                    </button>
                                </div>
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
                <AboutMe />
            </div>
        </main>
    )
}