import styles from "./About.module.css";

const About = () => {
  return (
    <section id="sobre-mi" className={styles.main_container}>
      <article className={styles.content_container}>
        <h3 className={styles.my_name}>Hola, soy Marco!</h3>
        <p className={styles.description}>
          Soy un apasionado desarrollador web Full Stack que se dedica a
          transformar ideas en experiencias digitales excepcionales.
        </p>
        <p className={styles.description}>
          Con habilidades que abarcan desde el diseño de interfaces de usuario
          atractivas y funcionales hasta la implementación de sólidas lógicas de
          servidor, me enfoco en la creatividad y la eficiencia a la hora de
          proporcionar soluciones web de alta calidad.
        </p>
        <p className={styles.description}>
          Mi experiencia me ha permitido perfeccionar mi capacidad para entender
          las necesidades de los clientes y traducirlas en productos finales que
          destacan por su usabilidad y experiencias positivas para el usuario.
          Además, estoy comprometido a mantenerme actualizado sobre las últimas
          tendencias y tecnologías en el campo del desarrollo web para ofrecer
          siempre soluciones innovadoras.
        </p>
      </article>
    </section>
  );
};

export default About;
