import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "@/dictionaries/dictionary.model";
import Logos from "../Logos/Logos";
import profilePhoto from "../../../public/assets/profile-photo.jpeg";
import styles from "./Hero.module.css";

interface Props {
  dictionary: Dictionary["hero"];
}

const Hero = ({ dictionary }: Props) => (
  <section className={styles.main_container} id="inicio">
    <article className={styles.content_container}>
      <div className={styles.text_container}>
        <Image
          src={profilePhoto}
          alt="profile photo"
          className={styles.profile_photo}
          width={200}
          height={200}
        />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <p className={styles.subtitles}>{dictionary.subtitle}</p>
        <p className={styles.subtitles}>{dictionary.location}</p>
        <Link href="#contacto" className={styles.contact_button}>
          {dictionary.button}
        </Link>
      </div>
      <Logos />
    </article>
  </section>
);

export default Hero;
