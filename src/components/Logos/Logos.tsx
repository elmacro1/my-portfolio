import Image from "next/image";

import { logos } from "./content";
import styles from "./Logos.module.css";

const Logos = () => (
  <div className={styles.main_container}>
    <div className={styles.slider}>
      {logos.map(({ label, image }) => (
        <div key={label} className={styles.logo_container}>
          <Image
            src={image}
            alt={label}
            className={styles.logo}
            width={60}
            height={60}
          />
          <p className={styles.label}>{label}</p>
        </div>
      ))}
    </div>
    <div className={styles.slider}>
      {logos.map(({ label, image }) => (
        <div key={label} className={styles.logo_container}>
          <Image
            src={image}
            alt={label}
            className={styles.logo}
            width={60}
            height={60}
          />
          <p className={styles.label}>{label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Logos;
