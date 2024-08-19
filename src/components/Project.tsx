import Image from "next/image"
import { BiLogoTypescript } from "react-icons/bi"
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri"
import { SiReacthookform } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"

export const Project = ({ reverse = false }) => {
    return (
        <>
            <div className="flex flex-wrap items-center container mx-auto py-10 lg:py-0 bg-background/30 dark:bg-pseudoblack/30 backdrop-blur-sm text-pseudoblack dark:text-white mb-10 lg:mb-20 xl:rounded-xl">
                <div className={`w-full lg:w-1/3 order-1 ${reverse && 'lg:order-3'}`}>
                    <h3 className="text-center text-4xl font-bold">The Store</h3>
                </div>
                <div className={`w-full lg:w-1/3 p-10 order-2`}>
                    <div className="card rounded-xl">
                        <div className="relative w-full aspect-video bg-background rounded-xl overflow-hidden z-10">
                            <Image
                                src={'/e-commerce.jpg'}
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
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dignissimos provident ut aspernatur quidem error est atque sequi doloribus possimus esse quasi nulla accusantium dolores commodi impedit recusandae dicta amet.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap w-full order-4 gap-4 justify-center pb-4 border-b border-background">
                    <div className="flex flex-col gap-2 items-center">
                        <RiNextjsFill className="text-5xl" />
                        <span>Next.js</span>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <RiSupabaseFill className="text-5xl" />
                        <span>Supabase</span>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <BiLogoTypescript className="text-5xl" />
                        <span>TypeScript</span>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <RiTailwindCssFill className="text-5xl" />
                        <span>Tailwind</span>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <TbBrandFramerMotion className="text-5xl" />
                        <span>Framer Motion</span>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <SiReacthookform className="text-5xl" />
                        <span>React-Hook-Form</span>
                    </div>
                </div>
            </div>
            
        </>
    )
}