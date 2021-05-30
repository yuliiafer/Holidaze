import { useState } from "react";
import styles from "styles/partials/GallerySliders.module.scss";

const GallerySliderItem = ({ img, title }) => {
  let [showDescription, setShowDescription] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      className={styles.photo}
    >
      <img className={styles.img} src={img} alt={title} />
    </div>
  );
};

export default GallerySliderItem;
