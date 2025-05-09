import ExperienceCard from "../ExperienceCard/ExperienceCard";
import styles from "./Experience.module.css";

const experiences = [
  {
    url: "https://helmcode.com/",
    title: "Helmcode",
    time: "Febrero 2025 - Actualidad",
    descriptions: [
      "Desarrollé el proyecto Andulia, un agente de IA para interactuar con infraestructuras de Cloud, utilizando tecnologías como React, Next.js, TailwindCSS, Python y Supabase",
      "También trabajé en el desarrollo de una plataforma de gestión de tareas para sus clientes, utilizando tecnologías como React, Next.js, Python y Supabase.",
    ],
    stack:
      "HTML - CSS - JS - Typescript - React - NextJS - TailwindCSS - Python - Fastapi - Supabase",
  },
  {
    url: "https://potentialitygroup.com/",
    title: "Potentiality Group",
    time: "Septiembre 2022 - Enero 2025",
    descriptions: [
      "Desarrollé y mantuve proyectos web y móviles, incluyendo la web principal de Iúnigo, aplicaciones móviles, productos con Guide Wire Cloud, y plataformas de seguros en Argentina y Uruguay, utilizando tecnologías como React, Next.js, Angular, React Native y Firebase.",
    ],
    stack:
      "HTML - CSS - JS - Typescript - React - React Native - NextJS - Angular - Firebase - Redux - Jest - Cypress - TailwindCSS - SCSS",
  },
  {
    url: "https://www.vippinn.com/",
    title: "Vippin",
    time: "Noviembre 2021 - Septiembre 2022",
    descriptions: [
      "Desarrollé una web app para la Clínica Reina Fabiola, una app móvil para el Ministerio de Turismo de Villa Carlos Paz, utilizando React, React Native, Firebase y Node.js.",
    ],
    stack:
      "HTML - CSS - JS - React - React Native - Redux - Firebase - NodeJS - Express.js",
  },
];

const Experience = () => (
  <section className={styles.main_container} id="experiencia">
    <h2 className={styles.title}>Experiencias destacadas</h2>
    <article className={styles.content_container}>
      {experiences.map((experience, index) => (
        <ExperienceCard dictionary={experience} key={index} />
      ))}
    </article>
  </section>
);

export default Experience;
