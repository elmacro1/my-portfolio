import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.content_container}>
        <li>Sobre mi</li>
        <li>Servicios</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
