import Link from "next/link";

import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.main_container}>
    <div className={styles.content_container}>
      <Link href="#inicio" className={styles.name}>
        <h2 className={styles.name}>Marco Galván</h2>
      </Link>
      <Navbar />
    </div>
  </header>
);

export default Header;
