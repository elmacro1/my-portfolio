import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.main_container}>
      <article className={styles.content_container}>
        <h1>Desarrollador web Full Stack</h1>
        <h2>
          Transforma tu visión en realidad digital. Convierte tus ideas en una
          experiencia web cautivadora y funcional.
        </h2>
      </article>
    </section>
  );
};

export default Hero;
