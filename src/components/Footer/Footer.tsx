"use client";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.main_container}>
      <p>
        Desarrollado por{" "}
        <a href="/" className={styles.name_link}>
          <strong>Marco 😎</strong>
        </a>
      </p>
      <p>
        {`Copyright © ${year} Marco Galván. Todos los derechos reservados.`}
      </p>
    </footer>
  );
};

export default Footer;
