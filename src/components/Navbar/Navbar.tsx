"use client";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { SlideMenuContext } from "@/context/SlideMenu";
import burguerIcon from "../../../public/assets/icons/burguer-icon.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isOpen, openSlide } = useContext(SlideMenuContext);

  return (
    <nav className={styles.main_container}>
      <div className={styles.links_container}>
        <Link href="/#sobre-mi" className={styles.links}>
          Sobre mi
        </Link>
        <Link href="/#experiencia" className={styles.links}>
          Experiencia
        </Link>
        <Link href="/#contacto" className={styles.links}>
          Contacto
        </Link>
      </div>
      <a href="/src/assets/CV.pdf" download="CV.pdf" className={styles.cv}>
        Descargar CV
      </a>
      {!isOpen && (
        <Image
          src={burguerIcon}
          alt={burguerIcon}
          width={32}
          height={32}
          onClick={() => openSlide()}
          className={styles.burguer_toggle}
        />
      )}
    </nav>
  );
};

export default Navbar;
