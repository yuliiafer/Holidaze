import styles from "styles/partials/HeroImage.module.scss";
import AnimatedMouseIcon from "components/shared/AnimatedMouseIcon/AnimatedMouseIcon";
import useMediaQuery from "components/shared/customHooks/useMediaQuery";
import { MdStar } from "react-icons/md";

const PageBanner = () => {
  const mobile = useMediaQuery("(max-width: 550px)", true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <div className={styles.stars}>
            <MdStar color="#FCBC03" />
            <MdStar color="#FCBC03" size="1.1em" />
            <MdStar color="#FCBC03" size="1.3em" />
            <MdStar color="#FCBC03" size="1.1em" />
            <MdStar color="#FCBC03" />
          </div>
          <p className={styles.text}>Holidaze</p>
          <h1 className={styles.title}>About Us</h1>
          <h3 className={styles.subtitle}>All Hotels in one place</h3>
        </div>
        <img
          className={styles.circlesBlock}
          src={"images/circles.png"}
          alt={"background"}
        />
      </div>
      
      <div
        className={styles.banner}
        style={{
          backgroundImage: 'url("images/hotel14.jpg")',
          position: "absolute",
          top: "0",
        }}
      >
        <img
          style={{
            width: "100%",
            position: "absolute",
            top: "0",
            height: "100vh",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
          src={mobile ? "images/hotel14.jpg" : "images/hotel14.jpg"}
          alt={"Holidaze"}
        />
      </div>
      <div className={styles.animatedMouse}>
        <AnimatedMouseIcon />
      </div>
    </div>
  );
};

export default PageBanner;
