// HowWeWork.jsx
import styles from "./how-we-work.module.css";

export default function HowWeWork() {
  return (
    <section className={styles.howWeWork}>
      <div className={styles.container}>
        <h2 className={styles.title}>Cómo trabajo</h2>
        <p className={styles.intro}>
          Mi enfoque se basa en la colaboración constante con mis clientes para
          asegurar que el producto final sea exactamente lo que necesitan.
          Trabajo de forma ágil y flexible, adaptándome a las necesidades del
          proyecto.
        </p>
        <div className={styles.process}>
          <div className={styles.processItemCard}>
            <strong>Descubrimiento y Planificación</strong>
            <p>
              Definir objetivos, identificar necesidades y crear un plan claro
              de acción.
            </p>
          </div>
          <div className={styles.processItemCard}>
            <strong>Desarrollo</strong>
            <p>
              Desarrollo del producto con tecnología moderna, asegurando calidad
              y funcionalidad.
            </p>
          </div>
          <div className={styles.processItemCard}>
            <strong>Pruebas y Feedback</strong>
            <p>
              Revisión constante y pruebas de usabilidad, haciendo ajustes según
              los comentarios.
            </p>
          </div>
          <div className={styles.processItemCard}>
            <strong>Entrega y Soporte</strong>
            <p>
              Entrega final y soporte continuo para resolver cualquier
              inconveniente posterior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
