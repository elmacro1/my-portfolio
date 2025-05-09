"use client";

import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.main_container}>
      <Link href="#inicio" className={styles.name_link}>
        Desarrollado por Marco 😎
      </Link>
      <p>{`Copyright © ${year} Marco Galván. Todos los derechos reservados.`}</p>
    </footer>
  );
};

export default Footer;
