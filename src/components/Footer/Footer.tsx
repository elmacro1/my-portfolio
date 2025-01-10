"use client";

import Link from "next/link";

import { Dictionary } from "@/dictionaries/dictionary.model";
import styles from "./Footer.module.css";

interface Props {
  dictionary: Dictionary["footer"];
}

const Footer = ({ dictionary }: Props) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.main_container}>
      <Link href="#inicio" className={styles.name_link}>
        {dictionary.title}
      </Link>
      <p>{`Copyright © ${year} Marco Galván. ${dictionary.copyright}`}</p>
    </footer>
  );
};

export default Footer;
