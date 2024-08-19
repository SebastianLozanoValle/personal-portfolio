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
    return (
        <main>
            <div className="overflow-hidden">
                <div className="h-auto lg:h-[calc(100vh-80px)] w-full bg-background dark:bg-pseudoblack">
                    <div className="container mx-auto flex flex-wrap items-center h-full">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:container mx-auto py-10 flex flex-col gap-4 items-center">
                                <div className="flex flex-col gap-4">
                                    <div className="text-3xl font-extrabold lg:text-5xl flex flex-col gap-2">
                                        <h1 className="">Hi, I&apos;m Sebastian</h1>
                                        <TypingAnimation className="leading-none text-start bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 text-transparent text-5xl" text="Front-End Developer"/>
                                    </div>
                                    <p className="text-xs lg:text-sm font-light">Web Developer specializing in React and Next.js to create dynamic, user-friendly websites.</p>
                                    <div className="flex gap-4 pt-2">
                                        <button className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                                            I am a recruiter
                                        </button>
                                        <button className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                                            I have a project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-10 flex justify-center items-center">
                        <Reveal hidden={{ opacity: 0, x: 75}} visible={{ opacity: 1, x: 0}}>
                            <div className="relative mx-auto">
                            {/* <div className="absolute top-[-5px] left-[-5px] h-[310px] lg:h-[360px] xl:h-[610px] aspect-square forma-charra bg-gradient-to-r from-purple-500 to-orange-400">
                            </div> */}
                            {/* <div className="relative h-[300px] lg:h-[350px] xl:h-[600px] aspect-square forma-charra">
                                <Image
                                    src={'/sebastian_picture.jpeg'}
                                    alt="Background Image"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="absolute top-0 left-0 w-full h-full"
                                />
                            </div> */}
                              <div className="card rounded-full">
                                <div className="relative h-[300px] lg:h-[350px] xl:h-[600px] aspect-square rounded-full z-10">
                                  <Image
                                      src={'/sebastian_picture.jpeg'}
                                      alt="Background Image"
                                      layout="fill"
                                      objectFit="cover"
                                      quality={100}
                                      className="absolute top-0 left-0 w-full h-full rounded-full p-5"
                                  />
                                </div>
                              </div>
                            </div>
                        </Reveal>
                        </div>
                    </div>
                </div>
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
                                        CHECK OUT SIDE PROJECTS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                  <h2 className="font-extrabold text-5xl text-center py-20 pb-40 lg:py-40 text-white">My Side Projects</h2>
                  <div className="">
                    <Project />
                    <Project reverse={true} />
                    <Project />
                  </div>
                </div>
            </div>
        </main>
    )
}