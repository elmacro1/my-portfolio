import styles from "./Contact.module.css";

const Contact = () => (
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
          <a href="https://github.com/elmacro1" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </article>
  </section>
);

export default Contact;
