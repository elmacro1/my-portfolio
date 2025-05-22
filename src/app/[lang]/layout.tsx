import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import type { Dictionary } from "@/dictionaries/dictionary.model";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marco Galvan | Desarrollador Full Stack especializado en JavaScript",
  description:
    "Soy Marco Galvan, desarrollador full stack con experiencia en frontend y backend. Trabajo con tecnologías modernas como React, Next.js, Node.js, Express, Python, FastAPI y bases de datos SQL y NoSQL. Creo soluciones web y móviles eficientes y escalables.",
  creator: "Marco Galvan",
  authors: [{ name: "Marco Galvan", url: "https://mgalvan.online/" }],
  keywords: [
    "Marco Galvan",
    "Desarrollador Full Stack",
    "Desarrollo Web",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "React Native",
    "Angular",
    "Python",
    "FastAPI",
    "JavaScript",
    "TypeScript",
    "Frontend",
    "Backend",
    "Desarrollo de software",
    "Bases de datos",
    "API REST",
    "Desarrollador JavaScript",
    "Full Stack Developer",
    "Desarrollador Freelance",
  ],
  openGraph: {
    title:
      "Marco Galvan | Desarrollador Full Stack especializado en JavaScript",
    description:
      "Conocé mi trabajo como desarrollador full stack. Experiencia en React, Next.js, Node.js, Express y más. Desarrollo soluciones web y móviles a medida.",
    url: "https://mgalvan.online/",
    siteName: "Marco Galvan",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Galvan | Desarrollador Full Stack",
    description:
      "Desarrollo web y móvil con tecnologías modernas como React, Next.js y Node.js.",
    creator: "@MarcoGal4",
  },
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout(props: Props) {
  const { children, params } = props;

  const { lang } = await params;

  const dictionary = await import(`@/dictionaries/${lang}.json`)
    .then((m) => m.default as Dictionary)
    .catch(() => redirect("/es"));

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer dictionary={dictionary.footer} />
        <Analytics />
      </body>
    </html>
  );
}
