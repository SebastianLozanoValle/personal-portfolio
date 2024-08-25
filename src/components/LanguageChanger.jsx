'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/../i18nConfig';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

export default function LanguageChanger({languages}) {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    // Establecer cookie para next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Redirigir a la nueva ruta con el nuevo idioma
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="z-[9900]">
      <Select onValueChange={handleChange} value={currentLocale}>
          <SelectTrigger className={`${currentPathname.includes('contact') ? 'bg-background dark:bg-pseudoblack' : 'bg-pseudoblack'}`}>
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent className='z-[9900] bg-background dark:bg-pseudoblack'>
            <SelectGroup>
              <SelectLabel>{languages}</SelectLabel>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectGroup>
          </SelectContent>
      </Select>
    </div>
  );
}
