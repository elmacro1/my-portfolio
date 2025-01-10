"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SlideMenuContext } from "@/context/SlideMenu";
import burguerIcon from "../../../public/assets/icons/burguer-icon.svg";
import styles from "./Navbar.module.css";
import { Dictionary } from "@/dictionaries/dictionary.model";

interface Props {
  dictionary: Dictionary["nav"];
}

const Navbar = ({ dictionary }: Props) => {
  const { isOpen, openSlide } = useContext(SlideMenuContext);
  const pathname = usePathname();

  const formatLang = () => pathname.split("/").pop();

  const switchLang = formatLang() === "es" ? "en" : "es";

  return (
    <nav className={styles.main_container}>
      <div className={styles.links_container}>
        <Link href="#sobre-mi" className={styles.links}>
          {dictionary.about}
        </Link>
        <Link href="#experiencia" className={styles.links}>
          {dictionary.experience}
        </Link>
        <Link href="#contacto" className={styles.links}>
          {dictionary.contact}
        </Link>
      </div>
      {!isOpen && (
        <>
          <Link href={`/${switchLang}`} className={styles.lang_button}>
            {switchLang.toUpperCase()}
          </Link>
          <Image
            src={burguerIcon}
            alt={burguerIcon}
            width={32}
            height={32}
            onClick={() => openSlide()}
            className={styles.burguer_toggle}
          />
        </>
      )}
    </nav>
  );
};

export default Navbar;
