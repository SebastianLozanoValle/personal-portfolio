'use client'
import Image from "next/image"
import React from "react"
import { BiLogoTypescript } from "react-icons/bi"
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri"
import { SiReacthookform } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"
import { Reveal } from "./generics/Reveal"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export const Project = ({ reverse = false, projectName, src, description, technologies, web }: { reverse: boolean, projectName: string, src: string, description: string, technologies: Array<{ icon: React.ReactNode, name: string }>, web: string }) => {

    const { t } = useTranslation();

    return (
        <>
            <Reveal hidden={{ opacity: 0, x: reverse ? -75 : 75}}  visible={{ opacity: 1, x: 0}} delay={0.5} className="flex flex-wrap items-center container mx-auto py-10 lg:py-0 bg-background/30 dark:bg-pseudoblack/30 backdrop-blur-sm text-pseudoblack dark:text-white mb-10 lg:mb-20 xl:rounded-xl">
                <div className={`w-full lg:w-1/3 order-1 ${reverse && 'lg:order-3'}`}>
                    <h3 className="text-center text-4xl font-bold">{projectName}</h3>
                        <div className="flex gap-4 lg:px-4 py-4 justify-center items-center">
                        <Link href={'/contact'} className="font-bold text-lg px-4 xl:px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500 text-center lg:block">
                            {t('projects:cta1')}
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" href={web} className="font-bold text-lg px-4 xl:px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500 text-center lg:block">
                            {t('projects:cta2')}
                        </Link>
                    </div>
                </div>
                <div className={`w-full lg:w-1/3 p-10 order-2`}>
                    <div className="card rounded-xl">
                        <div className="relative w-full aspect-video bg-background rounded-xl overflow-hidden z-10">
                            <Image
                                src={src}
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        </div>
                    </div>
                    
                </div>
                <div className={`w-full lg:w-1/3 order-3 pb-8 lg:pb-0 ${reverse && 'lg:order-1'}`}>
                    <div className="container mx-auto">
                        <p className="text-sm">
                            {description}
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-wrap w-full order-4 gap-4 justify-center pb-4 border-b border-background">
                    {
                        technologies.map((technologie, index) => (
                            <div key={index + 'project'} className="flex flex-col gap-2 items-center">
                                <div className="text-5xl">
                                    {technologie.icon}
                                </div>
                                <span>{technologie.name}</span>
                            </div>
                        ))
                    }
                </div>
            </Reveal>
            
        </>
    )
}