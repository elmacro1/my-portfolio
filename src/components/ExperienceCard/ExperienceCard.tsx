import styles from "./ExperienceCard.module.css";
import { ExperienceItem } from "@/dictionaries/dictionary.model";

interface Props {
  dictionary: ExperienceItem;
}

const ExperienceCard = ({ dictionary }: Props) => (
  <article className={styles.main_container}>
    <a
      href={dictionary.url}
      target="_blank"
      className={styles.content_container}
    >
      <div className={styles.info_container}>
        <div className={styles.title_container}>
          <p className={styles.title}>{dictionary.title}</p>
          <p className={styles.working_period}>{dictionary.time}</p>
        </div>
        {dictionary.descriptions.map((desc, index) => (
          <p className={styles.description} key={index}>
            {desc}
          </p>
        ))}
      </div>
      <p className={styles.stack}>{dictionary.stack}</p>
    </a>
  </article>
);

export default ExperienceCard;
