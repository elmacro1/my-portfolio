import Link from "next/link";

import type { Dictionary } from "@/dictionaries/dictionary.model";

import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

interface Props {
  dictionary: Dictionary["nav"];
}

const Header = ({ dictionary }: Props) => (
  <header className={styles.main_container}>
    <div className={styles.content_container}>
      <Link href="#inicio" className={styles.name_link}>
        <h2 className={styles.name}>MG</h2>
      </Link>
      <Navbar dictionary={dictionary} />
    </div>
  </header>
);

export default Header;
