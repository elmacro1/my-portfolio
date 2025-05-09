import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={styles.services} id="servicios">
      <div className={styles.container}>
        <h2 className={styles.title}>Servicios</h2>
        <p className={styles.subtitle}>
          Desarrollo web moderno, soluciones escalables y trabajo en equipo
          cuando lo necesitás.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Webs para negocios</h3>
            <p>
              Sitios rápidos, modernos y optimizados para que tu negocio crezca.
              Ideal para pymes y emprendedores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Aplicaciones a medida</h3>
            <p>
              Desde MVPs hasta sistemas complejos, te ayudo a lanzar tu producto
              con tecnología actual.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Colaboración técnica</h3>
            <p>
              Me integro con equipos de desarrollo como freelance para sumar
              valor en proyectos ongoing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
