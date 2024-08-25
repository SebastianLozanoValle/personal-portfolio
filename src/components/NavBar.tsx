'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { CgMenuRight } from "react-icons/cg";
import LanguageChanger from '@/components/LanguageChanger'

export const NavBar = () => {
    const pathname = usePathname();

    const { t } = useTranslation();

    return (
        <nav className={`z-[100] top-0 left-0 p-4 lg:px-40 flex justify-between items-center h-[80px] ${pathname.includes('contact') ? 'fixed w-full text-pseudoblack dark:text-background bg-background dark:bg-pseudoblack' : 'sticky bg-pseudoblack text-background dark:shadow-orange-400 dark:shadow'}`}>
            <Link href={'/'} className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 hover:text-transparent">
                Sebastian Dev
            </Link>
            
            <button className="text-5xl relative lg:absolute lg:hidden">
                <CgMenuRight />
            </button>
            
            <ul className="hidden lg:flex absolute lg:relative gap-10 items-center justify-center text-lg font-bold">
                <li className="group relative">
                    <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                    <Link className="relative z-20" href={'/'}>{t('nav.home')}</Link>
                </li>
                <li className="group relative">
                    <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                    <Link className="relative z-20" href={'/'}>{pathname === '/' || pathname === '/en' || pathname.includes('contact') ? t('nav.services') : t('nav.skills')}</Link>
                </li>
                <li className="group relative">
                    <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                    <Link className="relative z-20" href={'/'}>{t('nav.projects')}</Link>
                </li>
                {/* <li className="group relative">
                    <span className="absolute z-10 bottom-1 -left-1 h-2 w-0 group-hover:w-full bg-orange-400 dark:bg-purple-500 transition-all duration-500 rounded-full"/>
                    <Link className="relative z-20" href={'/'}>{t('nav.language')}</Link>
                </li> */}
                <LanguageChanger languages={t('nav.language')} />
            </ul>

            <Link href={'/contact'} className="hidden lg:flex absolute lg:relative font-bold text-lg px-4 xl:px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500 text-center">
                {t('nav.cta')}
            </Link>

            {/* class=" bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 text-transparent" */}
        </nav>
    )
}