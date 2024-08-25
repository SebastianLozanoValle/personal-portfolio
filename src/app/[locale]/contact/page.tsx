
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import RetroGrid from "@/components/magicui/retro-grid";
import { ContactForm } from "@/components/forms/ContactForm";
import initTranslations from "@/app/i18n";
import TranslationsPrivider from '@/components/TranslationsProvider'

const i18nNamespaces = ['contact-form']

export default async function  Contact({ params: { locale }} : { params: { locale: any } }) {

    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <TranslationsPrivider resources={resources} locale={locale} namespaces={i18nNamespaces} >
            <div className="relative flex min-h-screen h-auto w-full flex-col items-center justify-center overflow-hidden bg-background dark:bg-pseudoblack md:shadow-xl">
                {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-orange-400 to-purple-500 bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    Retro Grid
                </span> */}
                <div className="lg:container lg:mx-auto py-20 lg:p-20 flex flex-wrap justify-center items-center w-full">
                    <div className="w-full flex flex-col items-center p-4 justify-center">
                        <h2 className="text-center text-[2.25rem] lg:text-[4.5rem] font-extrabold bg-gradient-to-t from-purple-500 to-orange-400 bg-clip-text transition-all duration-500 text-transparent">
                            {t("title")}
                        </h2>
                        {/* <p>(this component isnt already traduced and styled, it will soon. Thank you for your understanding.)Se que a veces llenar un formulario puede ser extenuante por eso he decidido solicitar la menor cantidad de informacion posibe para dar el debido seguimiento al proceso que desida emprender conmigo, agradezco el tiempo que dedicara en el y tambien lo he realizado con cmucho esmero para que vea misa avilidades en validacion de formulario, ux y manejo de los datos con el fin de poder obtener datos relevantes para sus bases de datos</p> */}
                    </div>
                    <div className="p-4 w-full">
                        <div className="p-4 bg-slate-100 rounded-lg dark:bg-slate-800">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            
                <RetroGrid />
            </div>
        </TranslationsPrivider>
    )
}