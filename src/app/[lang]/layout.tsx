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
  title: "Marco Galvan",
  description:
    "Hola! Soy desarrollador Front End con experiencia en React, Next.js, React Native y Angular.",
  creator: "Marco Galvan",
  authors: [{ name: "Marco Galvan", url: "https://marco-galvan.vercel.app/" }],
  keywords: [
    "Desarrollo Web",
    "Desarrollador Javascript",
    "Front end",
    "Back end",
    "Desarrollo Movil",
    "Desarrollo de software",
    "Marco Galvan",
    "Next.js",
    "React",
    "React Native",
    "Angular",
  ],
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
