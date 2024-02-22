import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.main_container}>
    <div className={styles.content_container}>
      <a href="/" className={styles.name}>
        <h2>Marco Galván</h2>
      </a>
      <Navbar />
    </div>
  </header>
);

export default Header;
