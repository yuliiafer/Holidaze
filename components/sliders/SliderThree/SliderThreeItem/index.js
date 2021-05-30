import styles from "styles/partials/SlidersThreeItem.module.scss";
import cx from "classnames";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";

const SliderThreeItem = ({ img, active, title, subtitle, link, oneLine }) => {
  let [lifted, setLifted] = useState(active);

  const handleLinkClick = (e) => {
    if (!link) e.preventDefault();
  };

  const cardClassNames = cx(styles.card, {
    [styles.lifted]: lifted,
    [styles.noLink]: !link,
    [styles.small]: oneLine,
  });

  return (
    <div className={styles.cardWrapper}>
      <div
        className={cardClassNames}
        onMouseEnter={() =>
          !window.matchMedia("screen and (max-width: 1000px)")
            ? setLifted(true)
            : null
        }
        onMouseLeave={() =>
          !window.matchMedia("screen and (max-width: 1000px)")
            ? setLifted(false)
            : null
        }
      >
        <LazyLoadImage
          effect="blur"
          className={styles.img}
          src={img}
          alt={title}
          onClick={handleLinkClick}
        />
        <div className={styles.content}>
          <p
            dangerouslySetInnerHTML={{ __html: subtitle }}
            className={styles.subtitle}
          />
          <p
            dangerouslySetInnerHTML={{ __html: title }}
            className={styles.title}
          />
          {link && (
            <div>
              Details <BiRightArrowAlt />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SliderThreeItem.propTypes = {
  img: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  oneLine: PropTypes.bool,
};

export default SliderThreeItem;
