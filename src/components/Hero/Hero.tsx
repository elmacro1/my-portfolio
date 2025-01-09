import Image from "next/image";

import Logos from "../Logos/Logos";
import profilePhoto from "../../../public/assets/profile-photo.jpeg";
import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.main_container}>
    <article className={styles.content_container}>
      <Image
        src={profilePhoto}
        alt="profile photo"
        className={styles.profile_photo}
        width={200}
        height={200}
      />
      <h1 className={styles.title}>Hola, soy Marco!</h1>
      <p className={styles.subtitles}>Desarrollador Front End</p>
      <p className={styles.subtitles}>Argentina, Santiago del Estero</p>
      <Logos />
    </article>
  </section>
);

export default Hero;
