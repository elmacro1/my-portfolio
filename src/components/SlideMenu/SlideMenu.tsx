import React from "react";
import Image from "next/image";
import Link from "next/link";
import xIcon from "../../../public/assets/icons/xmark-icon.svg";
import styles from "./SlideMenu.module.css";

const SlideMenu = () => {
  return (
    <nav className={styles.backdrop}>
      <div className={styles.main_container}>
        <Image src={xIcon} alt={xIcon} width={32} height={32} />
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
      </div>
    </nav>
  );
};

export default SlideMenu;
