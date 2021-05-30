import React from "react";
import styles from "styles/partials/TextBlock.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const TextBlock = ({ subtitle, title, img, withStarImage, content }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {withStarImage && (
          <div className={styles.starImg}>
            <LazyLoadImage
              effect="br"
              className={styles.img}
              src="images/travel.png"
              alt="Bergen"
            />
          </div>
        )}

        <div className={styles.content}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h2 className={styles.title}>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className={styles.imageWrapper}>
          <LazyLoadImage
            effect="blur"
            className={styles.img}
            src={img}
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

TextBlock.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  withStarImage: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

TextBlock.defaultProps = {
  withStarImage: false,
};

export default TextBlock;
