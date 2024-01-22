import Image from "next/image";
import aboutimage from "../../../public/about.png";
import aboutimage2 from "../../../public/about2.png";
import aboutimage3 from "../../../public/about3.png";
import aboutimage4 from "../../../public/about4.svg";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.maincontainers}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.Maintitle}>About Us!</h2>
          <h1 className={styles.Secondtitle}>Our Roots</h1>
          <p className={styles.aboutdiscrip}>
            Established with a vision to revolutionize the digital presence of
            businesses, [Web Design Farm] sprouted from a collective passion for
            design, technology, and user-centric solutions. Our journey began
            with a commitment to sow the seeds of unique and visually stunning
            websites that stand out in the vast field of the internet.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image alt="about" src={aboutimage} width={600} height={600} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.Secondtitle}>What Sets Us Apart</h1>
          <p className={styles.aboutdiscrip}>
            At [Web Design Farm], we take pride in our distinctive approach to
            web design. Our team of seasoned designers, developers, and digital
            strategists collaborate seamlessly to bring forth projects that not
            only meet but exceed expectations. We believe in the power of
            collaboration, creativity, and continuous learning to stay ahead of
            the ever-evolving digital landscape.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image alt="about" src={aboutimage2} width={600} height={600} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.Secondtitle}>Our Design Philosophy</h1>
          <p className={styles.aboutdiscrip}>
            We believe that great design goes beyond aesthetics. It's about
            creating an immersive and seamless user experience that resonates
            with your audience. Whether it's a sleek corporate website, an
            engaging e-commerce platform, or a dynamic portfolio, we tailor our
            designs to reflect your brand identity and goals.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image alt="about" src={aboutimage3} width={600} height={600} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.Secondtitle}>The Harvest</h1>
          <p className={styles.aboutdiscrip}>
            Our portfolio stands as a testament to the diverse range of projects
            we've undertaken. From small businesses to established enterprises,
            we've had the privilege of working with clients across various
            industries. Each project is a unique crop, carefully cultivated and
            harvested to yield a bountiful harvest of success for our clients.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image alt="about" src={aboutimage4} width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
