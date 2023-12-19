import styles from "./ExperienceCard.module.css";
import { ExperienceData } from "../Experience/models";

interface Props {
  experienceInstance: ExperienceData;
}

const ExperienceCard = ({ experienceInstance }: Props) => {
  const { title, descriptions, url, stack, workingPeriod } = experienceInstance;
  return (
    <article className={styles.main_container}>
      <a href={url} target="_blank" className={styles.content_container}>
        <div className={styles.info_container}>
          <div className={styles.title_container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.working_period}>{workingPeriod}</p>
          </div>
          {descriptions.map((desc, index) => (
            <p className={styles.description} key={index}>
              {desc}
            </p>
          ))}
        </div>
        <p className={styles.stack}>{stack}</p>
      </a>
    </article>
  );
};

export default ExperienceCard;
