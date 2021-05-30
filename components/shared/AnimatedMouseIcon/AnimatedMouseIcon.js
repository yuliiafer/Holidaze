import styles from "styles/partials/Animate.module.scss";
import PropTypes from "prop-types";

const AnimatedMouseIcon = ({ black }) => {
  return (
    <span className={styles.scrollBtn + " " + (black && styles.black)}>
      <span className={styles.mouse}>
        <span />
      </span>
    </span>
  );
};

AnimatedMouseIcon.propTypes = {
  black: PropTypes.bool,
};

AnimatedMouseIcon.defaultProps = {
  black: false,
};

export default AnimatedMouseIcon;
