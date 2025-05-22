import type { Dictionary } from "@/dictionaries/dictionary.model";
import styles from "./About.module.css";

interface Props {
  dictionary: Dictionary["about"];
}

const About = ({ dictionary }: Props) => (
  <section id="sobre-mi" className={styles.main_container}>
    <h2 className={styles.title}>{dictionary.title}</h2>
    <article className={styles.content_container}>
      {dictionary.descriptions.map((desc, index) => (
        <p className={styles.description} key={index}>
          {desc}
        </p>
      ))}
    </article>
  </section>
);

export default About;
