import type { Dictionary } from "@/dictionaries/dictionary.model";
import styles from "./Hero.module.css";

interface Props {
  dictionary: Dictionary["hero"];
}

const Hero = ({ dictionary }: Props) => (
  <section className={styles.hero}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Desarrollo web profesional para negocios y equipos de tecnología
      </h1>
      <p className={styles.subtitle}>
        Ayudo a emprendedores y empresas a crear sitios web modernos, rápidos y
        pensados para crecer.
        <br />
        Ya sea que necesites una web completa o sumar un desarrollador freelance
        a tu equipo, contá conmigo.
      </p>
      <div className={styles.buttons}>
        <a href="#servicios" className={styles.primaryButton}>
          Ver servicios
        </a>
        <a href="https://wa.me/tu-numero" className={styles.secondaryButton}>
          Hablemos
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
