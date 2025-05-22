"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SlideMenuContext } from "@/context/SlideMenu";
import xIcon from "@/../public/assets/logos/x_dark.svg";
import linkedInIcon from "@/../public/assets/logos/linkedin.svg";
import githubIcon from "@/../public/assets/logos/github-dark.svg";
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
          <Image src={xIcon} alt="x icon" width={16} height={16} />
        </Link>
        <Link href="#experiencia" className={styles.links}>
          <Image
            src={linkedInIcon}
            alt="linkedin icon"
            width={16}
            height={16}
          />
        </Link>
        <Link href="#contacto" className={styles.links}>
          <Image src={githubIcon} alt="github icon" width={16} height={16} />
        </Link>
        <Link href={`/${switchLang}`} className={styles.lang_button}>
          {switchLang.toUpperCase()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
