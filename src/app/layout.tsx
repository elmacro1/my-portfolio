import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import Header from "@/components/Header/Header";
import SlideMenu from "@/components/SlideMenu/SlideMenu";
import SlideMenuContextProvider from "@/context/SlideMenu";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marco Galvan | Desarrollador Full Stack",
  description:
    "Soy Marco Galvan, desarrollador full stack especializado en la creación de soluciones web y móviles usando React, Next.js, React Native y Angular. Ayudo a empresas y emprendedores a desarrollar productos digitales de alto impacto.",
  creator: "Marco Galvan",
  authors: [{ name: "Marco Galvan", url: "https://marco-galvan.online/" }],
  keywords: [
    "Marco Galvan",
    "Desarrollador Full Stack",
    "Desarrollador Web",
    "Desarrollador React",
    "Desarrollador Next.js",
    "Desarrollador Angular",
    "Desarrollador React Native",
    "Freelancer Web",
    "Software Developer",
    "Desarrollo de Aplicaciones",
    "Desarrollo Front End",
    "Desarrollo Back End",
    "Programador Freelance",
    "JavaScript",
    "TypeScript",
    "Node.js",
  ],
  openGraph: {
    title: "Marco Galvan | Desarrollador Full Stack",
    description:
      "Construyo productos digitales a medida para empresas, pymes y emprendedores. Sitios web, apps móviles y soluciones a medida.",
    url: "https://marco-galvan.online/",
    type: "website",
    locale: "es_AR",
    siteName: "Marco Galvan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Galvan | Desarrollador Full Stack",
    description:
      "Desarrollador especializado en React, Next.js, React Native y Angular. Transformo ideas en soluciones reales.",
    creator: "@MarcoGal4",
  },
};
interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SlideMenuContextProvider>
          <Header />
          <SlideMenu />
        </SlideMenuContextProvider>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
