import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Services from "@/components/services/services";
import Portfolio from "@/components/portfolio/portfolio";
import Benefits from "@/components/benefits/benefits";
import HowWeWork from "@/components/how-we-work/how-we-work";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Benefits />
      <Experience />
      <HowWeWork />
      <Contact />
    </main>
  );
}
