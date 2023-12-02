import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main_container}>
      <div className={styles.content_container}>
        <Title />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
