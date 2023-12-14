import styles from "./Experience.module.css";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <section className={styles.main_container} id="experiencia">
      <h2>Experience</h2>
      <article className={styles.content_container}>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </article>
    </section>
  );
};

export default Experience;
