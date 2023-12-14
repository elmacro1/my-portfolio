import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.main_container}>
      <article className={styles.content_container}>
        <h1>Hola, soy Marco!</h1>
        <p>Desarrollo apps web y móviles</p>
        <p>Autodidacta de por vida</p>
      </article>
    </section>
  );
};

export default Hero;
