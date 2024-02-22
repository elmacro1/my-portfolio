import styles from "./Experience.module.css";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { experienceData } from "./content";

const Experience = () => (
  <section className={styles.main_container} id="experiencia">
    <h2 className={styles.title}>Experiencia</h2>
    <article className={styles.content_container}>
      {experienceData.map((experience, index) => (
        <ExperienceCard experienceInstance={experience} key={index} />
      ))}
    </article>
  </section>
);

export default Experience;
