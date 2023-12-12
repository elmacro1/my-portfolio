import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.main_container}>
      <article className={styles.content_container}>
        <h1>Hola, soy Marco!</h1>
        <h2>
          Soy un apasionado desarrollador web Full Stack que se dedica a
          transformar ideas en experiencias digitales excepcionales.
        </h2>
      </article>
    </section>
  );
};

export default Hero;
