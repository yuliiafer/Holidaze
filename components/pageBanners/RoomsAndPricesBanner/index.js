import styles from "styles/partials/HeroImage.module.scss";
import AnimatedMouseIcon from "components/shared/AnimatedMouseIcon/AnimatedMouseIcon";
import useMediaQuery from "components/shared/customHooks/useMediaQuery";
import { MdStar } from "react-icons/md";
import Search from "components/Search";

const RoomsAndPricesBanner = () => {
  const mobile = useMediaQuery("(max-width: 550px)", true);
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
          <p className={styles.text}>Holidaze</p>
          <h1 className={styles.title}>Hotels and B&B</h1>
          <h3 className={styles.subtitle}>in Bergen</h3>
        </div>
        <img
          className={styles.circlesBlock}
          src={"images/circles.png"}
          alt={"background"}
        />
      </div>
      <div className={styles.moduleBlock}>
        <Search />
        </div>
      <div className={styles.banner2}>
          <img
            src={mobile ? "bg.jpg" : "bg.jpg"}
            alt={"Holidaze"}
          />
      </div>
      <div className={styles.animatedMouse}>
        <AnimatedMouseIcon />
      </div>
    </div>
  );
};

export default RoomsAndPricesBanner;
