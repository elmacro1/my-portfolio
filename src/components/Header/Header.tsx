import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main_container}>
      <div className={styles.content_container}>
        <h3 className={styles.name}>Marco Galván</h3>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
