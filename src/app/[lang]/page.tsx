import { Dictionary } from "@/dictionaries/dictionary.model";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dictionary = await import(`@/dictionaries/${lang}.json`).then(
    (m) => m.default as Dictionary
  );

  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <Hero dictionary={dictionary.hero} />
        <About dictionary={dictionary.about} />
        <Experience dictionary={dictionary.experience} />
      </div>
    </main>
  );
}
