import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.main_container}>
      <ul className={styles.social_container}>
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
      <p>Hecho por Marco 😎</p>
    </footer>
  );
};

export default Footer;
