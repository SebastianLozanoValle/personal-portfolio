import HyperText from "@/components/magicui/hyper-text";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Services } from "@/components/Services";
import Image from "next/image";
import { Reveal } from '@/components/generics/Reveal'
import { ServicesAccordion } from "@/components/ServicesAccordion";
import Link from "next/link";

const services = [
  {
    name: "Jack",
    id: "01",
    body: "Web Apps",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    id: "02",
    body: "Landig Pages",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "03",
    id: "@john",
    body: "E-Commerce",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    id: "04",
    body: "Blogs",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    id: "05",
    body: "Multiplatform Apps",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    id: "06",
    body: "Deploiment",
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
                    <h1 className="">Hi, I'm Sebastian</h1>
                    <TypingAnimation className="leading-none text-start bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 text-transparent text-5xl" text="Front-End Developer"/>
                  </div>
                  <p className="text-xs lg:text-sm font-light">Freelancer specializing in React and Next.js to create dynamic, user-friendly websites.</p>
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
                  <div className="relative h-[300px] lg:h-[350px] xl:h-[600px] aspect-square rounded-full card">
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
              </Reveal>
            </div>
          </div>
        </div>
        <Services items = {services} />
        <div className="bg-background dark:bg-pseudoblack dark:text-background">
          <div className="lg:container flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 py-20 lg:py-40">
              <div className="container mx-auto flex flex-col gap-16">
                <h2 className="text-5xl font-extrabold">
                  Services I Am Providing
                </h2>
                <p>
                  I provide all kinds of web and mobile development services at competitive prices. I ensure quality by following best practices, so you can get the best software solutions
                </p>
                <button className="max-w-fit font-bold text-lg px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                  GET IN TOUCH
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-20 pt-0 lg:py-40">
              <div className="lg:container mx-auto flex flex-col gap-16">
                <ServicesAccordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
