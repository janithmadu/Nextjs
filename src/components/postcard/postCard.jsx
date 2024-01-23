import Image from "next/image";
import styles from "./postcard.module.css";
import PostImage from "../../../public/postimage.jpg";
import Link from "next/link";
const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src={PostImage} fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title} >Titile</h1>
        <p className={styles.des} >Des</p>
        <Link href="/blog/post" > Read More</Link>
      </div>
    </div>
  );
};

export default postCard;
