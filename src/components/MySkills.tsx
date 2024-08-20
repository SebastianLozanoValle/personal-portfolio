'use client'
import { useState } from "react"

const skills = [
    "React",
    "Next.js",
    "Expo",
    "Astro",
    "Git",
    "GitHub",
    "JWT",
    "Android",
    "iOS",
    "Bash",
    "Supabase",
    "Express.js",
    "Prisma",
    "Apollographql",
    "Postgresql",
    "Firebase",
    "Mongodb",
    "Vercel",
    "Netlify",
    "AWS",
    "Hostinguer",
    "C-Panel",
    "testinglibrary",
    "jest",
    "cloudflare",
    "docker",
    "Typescript",
    "Javascript",
    "Java",
    "Springboot",
    "Visual Studio",
    "Android Studio",
    "Spring",
    "Figma",
  ];

export const MySkills = () => {

    const [shortVersion, setShortversion] = useState(true);

    return (
        <div className="container mx-auto flex flex-col gap-8">
            <h2 className="text-5xl font-extrabold">
                My Skills
            </h2>
            <div className="flex flex-col gap-4 font-bold">
                <div className="flex gap-4 relative w-[1/2] px-2">
                    <button onClick={() => {setShortversion(true)}} className={`w-1/2 ${shortVersion && ''}`}>
                        Short Version
                    </button>
                    <button onClick={() => {setShortversion(false)}} className={`w-1/2 ${!shortVersion && ''}`}>
                        Complete Version
                    </button>
                    <span className={`absolute bottom-0 w-1/2 h-1 left-0 rounded-full transition-all duration-500 bg-gradient-to-r from-purple-500 to-orange-400 ${shortVersion ? '': 'left-1/2'}`}/>
                </div>
                {
                    shortVersion ? (
                        <p className="font-light">
                            With two years of self-driven learning and practical experience, I&apos;ve honed my expertise in frontend development, specializing in React and Next.js. My journey includes completing the Oracle Next Education Bootcamp, which provided a strong foundation in both backend and frontend technologies. Currently, my focus is on creating dynamic, user-friendly interfaces, leveraging tools like React Hook Form, Framer Motion, and NextAuth.
                            <br />
                            I&apos;ve deployed projects on platforms like Vercel and Netlify, and have experience with various hosting environments. My background also includes collaborating closely with designers to implement responsive, mobile-first designs, ensuring accessibility and seamless user experiences. While my primary focus is on frontend development, I have a solid understanding of backend processes, enabling me to create well-rounded applications.
                        </p>
                    ) : (
                        <p className="font-light">
                            Over the past two years, I have been actively building my skills in web development through self-directed learning. I have completed various courses on platforms like Udemy and Platzi, and I successfully graduated from the ONE (Oracle Next Education) Bootcamp, where I was part of the 5th generation cohort. This rigorous training has provided me with a solid foundation in both backend and frontend development.
                            <br />
                            While I have experience with backend technologies like Spring Boot, Golang (Chi), and Rust (Rocket), my primary focus and passion lie in frontend development. I specialize in React and its ecosystem, particularly with Next.js, and I am also proficient with other tools like Astro and Vite-ReactRouterDom. My experience extends to deploying applications on platforms such as Netlify, Vercel, Cloudflare, and traditional hosting environments like Hostinger and cPanel.
                            <br />
                            I have a strong command of various libraries closely related to React, including React Hook Form, Zod, Framer Motion, NextAuth, Prisma, and Apollo Client. On the server side, I am familiar with Mongoose, Express, and Apollo Server, although my current focus remains on mastering frontend technologies.
                            <br />
                            Additionally, I have hands-on experience with React Native, especially using the Expo framework. I have successfully collaborated with designers, transforming their designs into responsive, mobile-first web applications. I am well-versed in dark mode and light mode themes, multilingual support, and web accessibility standards. I also have a solid understanding of API integration using both Fetch and Axios.
                            <br />
                            My goal is to continue advancing in frontend development, leveraging my skills in React, React Native, Expo, and Next.js to create seamless and engaging user experiences.
                        </p>
                    )
                }
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                    {
                        skills.map((skill: string, index) => <span key={index} className={`${index % 2 == 0 ? 'bg-purple-500' : 'bg-orange-400'} text-background rounded-full text-center text-xs flex items-center justify-center`}>{skill}</span>)
                    }
                </div>
            </div>
        </div>
    )
}