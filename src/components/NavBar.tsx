import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

export const NavBar = () => {
    return (
        <nav className="z-[9999] sticky top-0 left-0 bg-pseudoblack dark:shadow-orange-400 dark:shadow text-background p-4 lg:px-40 flex justify-between items-center h-[80px]">
            <Link href={'/'} className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 hover:text-transparent">
                Sebastian Dev
            </Link>
            
            <button className="text-5xl relative lg:absolute lg:hidden">
                <CgMenuRight />
            </button>
            
            <ul className="hidden lg:flex absolute lg:relative gap-10 items-center justify-center text-lg font-bold">
                <li className="group relative">
                    <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                    <Link className="relative z-20" href={'/'}>Home</Link>
                </li>
                <li className="group relative">
                    <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                    <Link className="relative z-20" href={'/'}>Services</Link>
                </li>
                <li className="group relative">
                    <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                    <Link className="relative z-20" href={'/'}>Projects</Link>
                </li>
                <li className="group relative">
                    <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                    <Link className="relative z-20" href={'/'}>Testimonials</Link>
                </li>
            </ul>

            <button className="hidden lg:flex absolute lg:relative font-bold text-lg px-4 xl:px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                LET&apos;S TALK
            </button>

            {/* class=" bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 text-transparent" */}
        </nav>
    )
}