"use client";

import styles from "./Title.module.css";

const scrollTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

const Title = () => (
  <h2 className={styles.name} onClick={() => scrollTop()}>
    Marco Galván
  </h2>
);

export default Title;
