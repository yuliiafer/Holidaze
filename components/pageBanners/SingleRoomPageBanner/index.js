import styles from "styles/partials/HeroImage.module.scss";
import AnimatedMouseIcon from "components/shared/AnimatedMouseIcon/AnimatedMouseIcon";
import PropTypes from "prop-types";

const RoomsAndPricesBanner = ({ bannerImg, title, subtitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <div className={styles.stars}>
            
          </div>
          <p className={styles.text}>Rooms and Prices</p>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        <img
          className={styles.circlesBlock}
          src={"/images/circles.png"}
          alt={"background"}
        />
        <div className={styles.moduleBlock} />
      </div>
      <div className={styles.banner}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={bannerImg}
          alt={"Rooms"}
        />
      </div>
      <div className={styles.animatedMouse}>
        <AnimatedMouseIcon />
      </div>
    </div>
  );
};

RoomsAndPricesBanner.propTypes = {
  bannerImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RoomsAndPricesBanner;
