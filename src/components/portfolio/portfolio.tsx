import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="proyectos">
      <div className={styles.container}>
        <h2 className={styles.title}>Proyectos</h2>
        <p className={styles.subtitle}>
          Actualmente estoy trabajando en nuevos proyectos personales y para
          clientes. Pronto vas a poder ver algunos ejemplos acá.
        </p>
      </div>
    </section>
  );
}
