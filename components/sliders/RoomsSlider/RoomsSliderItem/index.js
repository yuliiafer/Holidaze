import styles from "styles/partials/RoomsSlidersItem.module.scss";
import Link from "next/link";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RoomsSliderItem = ({ img, ...data }) => {
  return (
    <div className={styles.card}>
      <LazyLoadImage
        effect="blur"
        wrapperClassName={styles.img}
        src={img}
        alt={data.title}
      />

      <div className={styles.content}>
        <h6 className={styles.title}>
          Hotel
          <span>{data.title}</span>
        </h6>
        {data.additional && (
          <p className={styles.additionalInfo}>{data.additional}</p>
        )}
        <p className={styles.text}>{data.text}</p>
      </div>
      <Link href={data.link}>
        <a className={styles.link}>
          Details <span>→</span>
        </a>
      </Link>
    </div>
  );
};

RoomsSliderItem.propTypes = {
  img: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default RoomsSliderItem;
