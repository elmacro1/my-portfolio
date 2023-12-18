import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contacto" className={styles.main_container}>
      <article className={styles.content_container}>
        <p className={styles.title}>Hablemos!</p>
        <ul className={styles.social_container}>
          <li>
            <a href="mailto:elmacro11@gmail.com" target="_blank">
              Mail
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marcoagalvan/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mgalvan_98/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/elmacro1" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/MarcoGal4" target="_blank">
              X
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Contact;
