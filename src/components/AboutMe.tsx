'use client'
import { useTranslation } from "react-i18next"
import { TestEmail } from "./TestEmail"

export const AboutMe = ({ recruiter= false }) => {

    const { t } = useTranslation();

    return (
        <div className="bg-background dark:bg-pseudoblack text-pseudoblack dark:text-background flex flex-wrap">
            <div className="lg:container lg:mx-auto flex">
                <div className="container mx-auto py-20 w-full flex flex-col gap-8 text-center items-center">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 text-transparent">{t('navbar:titleabout')}</h2>
                    {
                        recruiter ? <p className="text-start lg:text-center text-lg">{t('navbar:textcustomer')}</p>
                        : <p className="text-start lg:text-center text-lg">{t('navbar:textrecruiter')}</p>
                    }
                    <span className="mt-4 text-sm font-light text-gray-400">
                        {t('navbar:anotation')}
                    </span>
                    <button aria-label="Share your feedback" className="lg:flex font-bold text-lg px-4 xl:px-8 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-pseudoblack hover:text-background transition-all duration-500">
                        {t('navbar:ctafeedback')}
                    </button>
                    {/* <TestEmail /> */}
                </div>
            </div>
        </div>
    )
}