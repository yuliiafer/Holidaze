import { useState } from "react";
import styles from "styles/partials/HeroImage.module.scss";
import AnimatedMouseIcon from "components/shared/AnimatedMouseIcon/AnimatedMouseIcon";
import useMediaQuery from "components/shared/customHooks/useMediaQuery";
import { MdArrowForward } from "react-icons/md";

const ContactPageBanner = () => {
  const mobile = useMediaQuery("(max-width: 550px)", true);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <p className={styles.text}>text</p>
            <h1 className={styles.title}>
              text <span>text</span>
            </h1>
            <h3 className={styles.subtitle}>text</h3>
          </div>
          <div className={styles.descriptionWrapper}>
            <div
              className={styles.toggleDescriptionBtn}
              onClick={() => setShowDescription((status) => !status)}
            >
              Details <MdArrowForward />
            </div>
            <div
              className={
                styles.descriptionBlock +
                (showDescription ? " " + styles.active : "")
              }
            >
              <p>lorem...</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
       
          <img
            style={{ maxWidth: "100%", height: '100vh' }}
            src={mobile ? "images/fjord.jpg" : "images/fjord.jpg"}
            alt={"Holidaze"}
          />
        
      </div>
      <div className={styles.animatedMouse}>
        <AnimatedMouseIcon />
      </div>
    </div>
  );
};

export default ContactPageBanner;
