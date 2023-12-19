import Link from "next/link";
import Image from "next/image";
import xIcon from "../../../public/assets/icons/xmark-icon.svg";
import burguerIcon from "../../../public/assets/icons/burguer-icon.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.main_container}>
      <div className={styles.links_container}>
        <Link href="/#sobre-mi" className={styles.links}>
          Sobre mi
        </Link>
        <Link href="/#experiencia" className={styles.links}>
          Experiencia
        </Link>
        {/* <Link href="/#proyectos" className={styles.links}>
        Proyectos
      </Link> */}
        <Link href="/#contacto" className={styles.links}>
          Contacto
        </Link>
      </div>
      <Image src={xIcon} alt={xIcon} width={32} height={32} />
      <Image src={burguerIcon} alt={burguerIcon} width={32} height={32} />
    </nav>
  );
};

export default Navbar;
