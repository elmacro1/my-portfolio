import styles from "./Hero.module.css";
import Image from "next/image";
import profilePhoto from "../../../public/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className={styles.main_container}>
      <article className={styles.content_container}>
        <Image
          src={profilePhoto}
          alt="profile photo"
          className={styles.profile_photo}
          width={200}
          height={200}
        />
        <h1>Hola, soy Marco!</h1>
        <p>Desarrollador Javascript</p>
        <p>Argentina, Santiago del Estero</p>
      </article>
    </section>
  );
};

export default Hero;
