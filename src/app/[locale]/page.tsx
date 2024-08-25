import initTranslations from '@/app/i18n'
import TranslationsPrivider from '@/components/TranslationsProvider'
import { LandingPage } from "@/components/landing-general/LandingPage";

const i18nNamespaces = ['services', 'herobanner', 'projects']

export default async function Home({ params: { locale }} : { params: { locale: any } }) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const services = [
    {
      id: "01",
      body: t("slider-services.0.body"),
    },
    {
      id: "02",
      body: t("slider-services.1.body"),
    },
    {
      id: "03",
      body: t("slider-services.2.body"),
    },
    {
      id: "04",
      body: t("slider-services.3.body"),
    },
    {
      id: "05",
      body: t("slider-services.4.body"),
    },
    {
      id: "06",
      body: t("slider-services.5.body"),
    },
  ];

  return (
    <TranslationsPrivider resources={resources} locale={locale} namespaces={i18nNamespaces} >
      <main>
        <LandingPage services={services} />
      </main>
    </TranslationsPrivider>
  );
}
