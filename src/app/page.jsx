import Link from "next/link";
import styles from "./home.module.css";
import Image from "next/image";
import HeroImage from "../../public/hero.gif"
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.HomeTitle}>We Build Your Dream!</h1>
        <p  className={styles.HomeDis}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis
          ratione animi aliquam, omnis cum sed reiciendis vitae ex neque,
          commodi totam facilis quas provident consequuntur illum dolorem nisi
          molestiae.
        </p>
        <div className={styles.buttionContainer}>
          <Link className={styles.HomeButtion} href="/about">About US</Link>
          <Link className={styles.HomeButtion} href="/admin">Contact US</Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="hero" width={700} height={700} />
      </div>
    </div>
  );
}
