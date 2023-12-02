import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.main_container}>
      <Link href="/#sobre-mi" className={styles.links}>
        Sobre mi
      </Link>
      <Link href="/#proyectos" className={styles.links}>
        Proyectos
      </Link>
      <Link href="/#contacto" className={styles.links}>
        Contacto
      </Link>
    </nav>
  );
};

export default Navbar;
