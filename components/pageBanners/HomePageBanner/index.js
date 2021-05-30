import styles from "styles/partials/HeroImage.module.scss";
import AnimatedMouseIcon from "components/shared/AnimatedMouseIcon/AnimatedMouseIcon";
import { MdStar } from "react-icons/md";

const HomePageBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <div className={styles.stars}>
            <MdStar color='#F0FF00' />
            <MdStar color='#F0FF00' size='1.1em'/>
            <MdStar color='#F0FF00'size='1.3em'/>
            <MdStar color='#F0FF00'size='1.1em' />
            <MdStar color='#F0FF00'/>
          </div>

          <p className={styles.text}>Hotel booking agency</p>
          <h1 className={styles.title}>Holidaze</h1>
          <h3 className={styles.subtitle}>Bergen, Norway</h3>
        </div>

        <img
          className={styles.circlesBlock}
          src={"images/circles.png"}
          alt={"background"}
        />
        <div className={styles.banner}></div>
      </div>
      <div className={styles.social}>
        <div className={styles.lin}>
          <a className={styles.al} href="" target="_blank">
            Instagram
          </a>
          <a className={styles.al} href="" target="_blank">
            Facebook
          </a>
        </div>
      </div>
      <div className={styles.animatedMouse}>
        <AnimatedMouseIcon />
      </div>
    </div>
  );
};

export default HomePageBanner;
