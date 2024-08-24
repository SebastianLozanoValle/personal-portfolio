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
      name: "Jack",
      id: "01",
      body: "React",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      id: "02",
      body: "Next.Js",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "03",
      id: "@john",
      body: "Redux",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      id: "04",
      body: "Zusand",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      id: "05",
      body: "Supabase",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      id: "06",
      body: "GraphQL-Apollo",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "07",
      body: "Express",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "08",
      body: "Hono.Js",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "09",
      body: "MongoDB",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "10",
      body: "PostgreSQL",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "11",
      body: "MySQL",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "12",
      body: "React Native",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "10",
      body: "Expo",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "10",
      body: "Git",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "James",
      id: "10",
      body: "Bash",
      img: "https://avatar.vercel.sh/james",
    },
  ];

export default function Home() {

  toast({
    title: "Welcom Recruiter!!",
    className: "bg-gradient-to-r from-purple-500 to-orange-400 text-background",
  });

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