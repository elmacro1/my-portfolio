import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import SlideMenu from "@/components/SlideMenu/SlideMenu";
import SlideMenuContextProvider from "@/context/SlideMenu";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marco Galvan",
  description:
    "Hola! Soy desarrollador Javascript con experiencia en el Front End y Back End.",
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
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
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
