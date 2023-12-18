import styles from "./About.module.css";

const About = () => {
  return (
    <section id="sobre-mi" className={styles.main_container}>
      <h2 className={styles.title}>Sobre mí</h2>
      <article className={styles.content_container}>
        <p className={styles.description}>
          Soy Marco Antonio Galván Fernandez, casado y padre de dos hermosas
          nenas.
        </p>
        <p className={styles.description}>
          Estudié en el Bootcamp SoyHenry, actualmente continúo formándome como
          autodidacta.
        </p>
        <p className={styles.description}>
          Tengo habilidades que abarcan desde el diseño de interfaces de usuario
          atractivas y funcionales hasta la implementación de sólidas lógicas de
          servidor, me enfoco en la creatividad y la eficiencia a la hora de
          proporcionar soluciones web de alta calidad.
        </p>
        <p className={styles.description}>
          Mi experiencia me ha permitido perfeccionar mi capacidad para entender
          las necesidades y traducirlas en productos finales que destacan por su
          usabilidad y experiencias positivas para el usuario. Además, me
          mantengo actualizado sobre las últimas tendencias y tecnologías en el
          campo del desarrollo de software para ofrecer siempre soluciones
          innovadoras.
        </p>
      </article>
    </section>
  );
};

export default About;
