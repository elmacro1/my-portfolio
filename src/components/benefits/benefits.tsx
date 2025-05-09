// Benefits.jsx
import styles from './benefits.module.css';

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Por qué trabajar conmigo?</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Experiencia real</h3>
            <p>
              Trabajo en tecnología a tiempo completo, por eso entiendo cómo funcionan los procesos reales y los equipos.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Adaptabilidad</h3>
            <p>
              Ya sea un emprendedor con una idea o un equipo técnico consolidado, me adapto a las necesidades del proyecto.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Comunicación clara</h3>
            <p>
              Explico lo técnico en términos simples para que siempre sepas qué estamos haciendo y por qué.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Enfoque en el negocio</h3>
            <p>
              No solo hago que algo funcione, también pienso en cómo eso ayuda a que tu negocio crezca o gane tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
