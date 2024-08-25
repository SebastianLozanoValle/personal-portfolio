'use client'
import { useState } from "react"
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

    return (
        <div className="container mx-auto flex flex-col gap-8">
            <h2 className="text-5xl font-extrabold">
            {t('herobanner:titleskills')}
            </h2>
            <div className="flex flex-col gap-4 font-bold">
                <div className="flex gap-4 relative w-[1/2] px-2">
                    <button onClick={() => {setShortversion(true)}} className={`w-1/2 ${shortVersion && ''}`}>
                        {t('herobanner:short')}
                    </button>
                    <button onClick={() => {setShortversion(false)}} className={`w-1/2 ${!shortVersion && ''}`}>
                        {t('herobanner:complete')}
                    </button>
                    <span className={`absolute -z-0 bottom-0 w-1/2 h-1 left-0 rounded-full transition-all duration-500 bg-gradient-to-r from-purple-500 to-orange-400 ${shortVersion ? '': 'left-1/2'}`}/>
                </div>
                {
                    shortVersion ? (
                        <p className="font-light">
                            {t('herobanner:shortVersion.part1')}
                            <br />
                            {t('herobanner:shortVersion.part2')}
                        </p>
                    ) : (
                        <p className="font-light">
                            {t('herobanner:completeVersion.part1')}
                            <br />
                            {t('herobanner:completeVersion.part2')}
                            <br />
                            {t('herobanner:completeVersion.part3')}
                            <br />
                            {t('herobanner:completeVersion.part4')}
                            <br />
                            {t('herobanner:completeVersion.part5')}
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