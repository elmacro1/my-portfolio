import styles from "./About.module.css";

const About = () => (
  <section id="sobre-mi" className={styles.main_container}>
    <h2 className={styles.title}>Sobre mí</h2>
    <article className={styles.content_container}>
      <p className={styles.description}>
        Soy un desarrollador Front End con experiencia utilizando Javascript,
        Typescript, React, Nextjs y React Native. Además, tengo experiencia en
        el desarrollo Back End utilizando Node.js y Express.js.
      </p>
      <p className={styles.description}>
        Me considero una persona autodidacta que está constantemente buscando
        nuevas formas de expandir mis conocimientos y mejorar mis habilidades.
        He trabajado en proyectos tanto en equipos colaborativos como en
        proyectos individuales, y mi objetivo principal es crear experiencias de
        usuario intuitivas y atractivas.
      </p>
      <p className={styles.description}>
        Además de mis habilidades técnicas, también soy un comunicador eficaz y
        disfruto colaborar con otros desarrolladores para alcanzar resultados
        excepcionales. Soy detallista y me enorgullezco del código limpio y bien
        estructurado.
      </p>
    </article>
  </section>
);

export default About;
