'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { CgMenuRight, CgClose } from "react-icons/cg";
import LanguageChanger from '@/components/LanguageChanger'
import { useState } from "react";

export const NavBar = () => {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const { t } = useTranslation();

    return (
        <nav className={`z-[100] top-0 left-0 p-4 lg:pr-16 flex justify-between items-center h-[80px] ${pathname.includes('contact') ? 'fixed w-full text-pseudoblack dark:text-background bg-background dark:bg-pseudoblack' : 'sticky bg-pseudoblack text-background dark:shadow-orange-400 dark:shadow'}`}>
            <div className="lg:flex-[1] flex lg:justify-around">
                <Link href={pathname === '/' || pathname === '/en' || pathname.includes('contact') ? '/#' : '#'} className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 hover:text-transparent">
                    Sebastian Dev
                </Link>
            </div>
            
            <button onClick={() => {setIsMobileOpen(!isMobileOpen)}} className="text-5xl lg:hidden">
                {isMobileOpen ? <CgClose /> : <CgMenuRight />}
            </button>

            <div className={`fixed top-[80px] right-0 bg-background/30 dark:bg-pseudoblack/30 backdrop-blur-sm transition-all ease-in-out duration-500 ${isMobileOpen ? 'w-full h-[calc(100vh-80px)] rounded-bl-none' : 'w-0 h-0 rounded-bl-3xl'}`}></div>

            <div className={`fixed lg:flex-[2] lg:justify-around lg:relative top-[80px] lg:top-0 lg:right-auto flex flex-col lg:flex-row gap-8 lg:gap-10 transition-all justify-center items-center ease-in-out duration-1000 ${isMobileOpen ? 'h-[calc(100vh-80px)] w-full visible right-0' : 'h-0 w-0 lg:h-auto lg:w-auto lg:visible -right-[400px]'}`}>
                <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-center text-base lg:text-lg font-bold">
                    <li className={`group relative ${!pathname.includes("contact") && "lg:text-background"} text-pseudoblack dark:text-background`}>
                        <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                        <Link onClick={() => {setIsMobileOpen(false)}} className="relative z-20" href={pathname === '/' || pathname === '/en' || pathname.includes('contact') ? '/#' : '#'}>{t('nav.home')}</Link>
                    </li>
                    <li className={`group relative ${!pathname.includes("contact") && "lg:text-background"} text-pseudoblack dark:text-background`}>
                        <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                        <Link onClick={() => {setIsMobileOpen(false)}} className="relative z-20" href={pathname === '/' || pathname === '/en' || pathname.includes('contact') ? '/#services' : '#skills'}>{pathname === '/' || pathname === '/en' || pathname.includes('contact') ? t('nav.services') : t('nav.skills')}</Link>
                    </li>
                    <li className={`group relative ${!pathname.includes("contact") && "lg:text-background"} text-pseudoblack dark:text-background`}>
                        <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                        <Link onClick={() => {setIsMobileOpen(false)}} className="relative z-20" href={pathname === '/' || pathname === '/en' || pathname.includes('contact') ? '/#projects' : '#projects'}>{t('nav.projects')}</Link>
                    </li>
                    <LanguageChanger languages={t('nav.language')} />
                </ul>

                <Link onClick={() => {setIsMobileOpen(false)}} href={'/contact'} className="font-bold text-lg px-4 xl:px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500 text-center lg:block">
                    {t('nav.cta')}
                </Link>
            </div>
        </nav>
    )
}
