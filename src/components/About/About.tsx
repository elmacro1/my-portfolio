import styles from "./About.module.css";

const About = () => (
  <section className={styles.about} id="sobre-mi">
    <div className={styles.container}>
      <h2 className={styles.title}>Sobre mí</h2>
      <p className={styles.text}>
        Soy Marco Galván, desarrollador web y mobile con experiencia en{" "}
        <strong>Next.js, React, Node.js</strong> y <strong>React Native</strong>
        . Ayudo a emprendedores y pequeñas empresas a digitalizar sus ideas con
        soluciones simples, funcionales y enfocadas en el usuario.
      </p>
      <p className={styles.text}>
        Trabajo full time en tecnología, pero también me dedico a proyectos
        freelance porque me apasiona crear productos que realmente resuelvan
        problemas. Me adapto a distintos equipos, necesidades y presupuestos.
      </p>
      <p className={styles.text}>
        Si tenés una idea o negocio y querés llevarlo al mundo digital, estoy
        para ayudarte.
      </p>
    </div>
  </section>
);

export default About;
