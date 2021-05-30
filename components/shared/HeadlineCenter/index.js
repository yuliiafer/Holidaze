import styles from "styles/partials/Headline.module.scss";
import PropTypes from "prop-types";

const HeadlineCenter = ({ title, style }) => {
  return (
    <h2 style={style} className={styles.headline}>
      {title}
    </h2>
  );
};

HeadlineCenter.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default HeadlineCenter;
