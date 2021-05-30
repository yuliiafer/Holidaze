import styles from "styles/partials/OtherSlider.module.scss";
import Link from "next/link";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OtherSliderItem = ({ img, link, title, active, desc }) => {
  return (
    <div className={active ? styles.card + " " + styles.active : styles.card}>
      <Link href={link}>
        <a>
          <LazyLoadImage
            effect={"blur"}
            wrapperClassName={styles.img}
            src={img}
            alt={title}
          />
          <div className={styles.content}>
            <p className={styles.roomSubtitle}>Hotel</p>
            <p className={styles.roomTitle}>{title}</p>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.imgContainer}>
              <img src="/images/hotel14.jpg" alt="Hotel" />
            </div>

            <div className={styles.imgContainer}>
              <img src="/images/hotel11.jpg" alt="Hotel" />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

OtherSliderItem.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  capacity: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};

export default OtherSliderItem;
