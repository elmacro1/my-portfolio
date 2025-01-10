import type { Dictionary } from "@/dictionaries/dictionary.model";
import styles from "./About.module.css";

interface Props {
  dictionary: Dictionary["about"];
}

const About = ({ dictionary }: Props) => (
  <section id="sobre-mi" className={styles.main_container}>
    <h2 className={styles.title}>{dictionary.title}</h2>
    <article className={styles.content_container}>
      <p className={styles.description}>{dictionary.first_description}</p>
      <p className={styles.description}>{dictionary.second_description}</p>
    </article>
  </section>
);

export default About;
