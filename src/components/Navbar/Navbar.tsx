"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SlideMenuContext } from "@/context/SlideMenu";
import burguerIcon from "../../../public/assets/icons/burguer-icon.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isOpen, openSlide } = useContext(SlideMenuContext);
  const pathname = usePathname();

  const formatLang = () => pathname.split("/").pop();

  const switchLang = formatLang() === "es" ? "en" : "es";

  return (
    <nav className={styles.main_container}>
      <div className={styles.links_container}>
        <Link href="#servicios" className={styles.links}>
          Servicios
        </Link>
        <Link href="#proyectos" className={styles.links}>
          Proyectos
        </Link>
        <Link href="#sobre-mi" className={styles.links}>
          Sobre mi
        </Link>
        <Link href="#contacto" className={styles.links}>
          Contacto
        </Link>
      </div>
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
