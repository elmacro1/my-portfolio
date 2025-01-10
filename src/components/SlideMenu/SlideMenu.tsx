"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { SlideMenuContext } from "@/context/SlideMenu";
import closeIcon from "../../../public/assets/icons/close-icon.svg";
import styles from "./SlideMenu.module.css";
import { Dictionary } from "@/dictionaries/dictionary.model";

interface Props {
  dictionary: Dictionary["nav"];
}

const SlideMenu = ({ dictionary }: Props) => {
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
            {dictionary.about}
          </Link>
          <Link
            href="/#experiencia"
            className={styles.links}
            onClick={() => closeSlide()}
          >
            {dictionary.experience}
          </Link>
          <Link
            href="/#contacto"
            className={styles.links}
            onClick={() => closeSlide()}
          >
            {dictionary.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SlideMenu;
