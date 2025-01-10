import type { Dictionary } from "@/dictionaries/dictionary.model";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import styles from "./Experience.module.css";

interface Props {
  dictionary: Dictionary["experience"];
}

const Experience = ({ dictionary }: Props) => (
  <section className={styles.main_container} id="experiencia">
    <h2 className={styles.title}>{dictionary.title}</h2>
    <article className={styles.content_container}>
      {dictionary.experiences.map((experience, index) => (
        <ExperienceCard dictionary={experience} key={index} />
      ))}
    </article>
  </section>
);

export default Experience;
