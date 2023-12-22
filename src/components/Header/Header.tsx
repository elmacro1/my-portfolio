"use client";
import { useState } from "react";
import SlideMenu from "../SlideMenu/SlideMenu";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  const [drawerIsOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.main_container}>
      <div className={styles.content_container}>
        <a href="/" className={styles.name}>
          <h2>Marco Galván</h2>
        </a>
        <Navbar />
        <SlideMenu />
      </div>
    </header>
  );
};

export default Header;
