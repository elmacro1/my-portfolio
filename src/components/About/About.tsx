import styles from "./About.module.css";

const About = () => (
  <section id="sobre-mi" className={styles.main_container}>
    <h2 className={styles.title}>Sobre mí</h2>
    <article className={styles.content_container}>
      <p className={styles.description}>
        Desarrollador Front End con experiencia en Javascript, Typescript,
        React, Next.js, React Native y Angular. También tengo conocimientos en
        Node.js y Express.js para el desarrollo Back End. Busco constantemente
        aprender y mejorar mis habilidades.
      </p>
      <p className={styles.description}>
        Mi enfoque es crear experiencias de usuario intuitivas y atractivas. Soy
        comunicativo, colaborativo y me enorgullezco de escribir código limpio.
        Siempre estoy al tanto de las últimas tendencias en desarrollo web y
        participo en la comunidad de desarrolladores.
      </p>
    </article>
  </section>
);

export default About;
