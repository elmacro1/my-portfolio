"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import xIcon from "@/../public/assets/logos/x_dark.svg";
import linkedInIcon from "@/../public/assets/logos/linkedin.svg";
import githubIcon from "@/../public/assets/logos/github-dark.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();

  const formatLang = () => pathname.split("/").pop();

  const switchLang = formatLang() === "es" ? "en" : "es";

  return (
    <nav className={styles.main_container}>
      <div className={styles.links_container}>
        <Link
          href="https://x.com/MarcoGal4"
          target="_blank"
          className={styles.links}
        >
          <Image
            src={xIcon}
            alt="x icon"
            width={16}
            height={16}
            className={styles.image}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marcoagalvan/"
          target="_blank"
          className={styles.links}
        >
          <Image
            src={linkedInIcon}
            alt="linkedin icon"
            width={16}
            height={16}
            className={styles.image}
          />
        </Link>
        <Link
          href="https://github.com/elmacro1"
          target="_blank"
          className={styles.links}
        >
          <Image
            src={githubIcon}
            alt="github icon"
            width={16}
            height={16}
            className={styles.image}
          />
        </Link>
        <Link href={`/${switchLang}`} className={styles.lang_button}>
          {switchLang.toUpperCase()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
