"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { SlideMenuContext } from "@/context/SlideMenu";
import closeIcon from "../../../public/assets/icons/close-icon.svg";
import styles from "./SlideMenu.module.css";

const SlideMenu = () => {
  const { isOpen, closeSlide } = useContext(SlideMenuContext);

  return (
    <nav className={`${styles.backdrop} ${isOpen && styles.backdrop_open}`}>
      <div className={styles.main_container}>
        <Image
          src={closeIcon}
          alt={closeIcon}
          width={32}
          height={32}
          onClick={() => closeSlide()}
          className={styles.close_icon}
        />
        <div className={styles.links_container}>
          <Link
            href="/#sobre-mi"
            className={styles.links}
            onClick={() => closeSlide()}
          >
            Sobre mi
          </Link>
          <Link
            href="/#experiencia"
            className={styles.links}
            onClick={() => closeSlide()}
          >
            Experiencia
          </Link>
          <Link
            href="/#contacto"
            className={styles.links}
            onClick={() => closeSlide()}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SlideMenu;
