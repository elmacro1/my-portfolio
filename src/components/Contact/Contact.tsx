import styles from "./Contact.module.css";

const Contact = () => (
  <section className={styles.contact} id="contacto">
    <div className={styles.container}>
      <h2 className={styles.title}>¿Listo para transformar tu negocio?</h2>
      <p className={styles.description}>
        Si estás buscando desarrollar tu próximo producto digital, mejorar tu
        infraestructura o necesitas un colaborador en tu equipo, ¡estoy aquí
        para ayudarte!
      </p>
      <div className={styles.ctaContainer}>
        <a href="mailto:elmacro11@gmail.com" className={styles.primaryButton}>
          ¡Contáctame ahora!
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
