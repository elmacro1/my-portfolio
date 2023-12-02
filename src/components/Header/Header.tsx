import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main_container}>
      <div className={styles.content_container}>
        <a href="/" >
          <h2 className={styles.name}>Marco Galván</h2>
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
