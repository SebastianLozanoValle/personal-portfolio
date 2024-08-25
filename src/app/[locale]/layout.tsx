

// import { preMetadata } from '@/app/metadata';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/generics/ModeToggle";
import { Toaster } from "@/components/ui/toaster";
import initTranslations from '@/app/i18n';
import TranslationsPrivider from '@/components/TranslationsProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebastian Dev - Full-Stack Web & Mobile Developer",
  description: "Freelance software developer specializing in Full-Stack Web and Mobile development. Expertise in modern technologies, including React, Node.js, Expo, and other cutting-edge tools.",
  keywords: "Sebastian Dev, software developer, full-stack developer, front-end developer, back-end developer, web development, mobile development, React, Node.js, multiplatform",
  robots: "index, follow",
};

// export const metadata = preMetadata;

const i18nNamespaces = ['navbar', 'footer', 'common'];

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: any }
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TranslationsPrivider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className="bg-gradient-to-r from-purple-500 to-orange-400">
              <NavBar />
              {children}
              <Toaster />
              <ModeToggle />
            </div>
          </TranslationsPrivider>
        </ThemeProvider>
      </body>
    </html>
  );
}
