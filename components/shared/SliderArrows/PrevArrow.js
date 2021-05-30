import styles from "styles/partials/Arrow.module.scss";
import { RiArrowDropLeftFill } from "react-icons/ri";
import NextArrow from "./NextArrow";
import PropTypes from "prop-types";

function PrevArrow({ positionStyles, onClick }) {
  return (
    <RiArrowDropLeftFill
      className={styles.prevArrow}
      style={{ ...positionStyles }}
      onClick={onClick}
    />
  );
}

NextArrow.propTypes = {
  positionStyles: PropTypes.object,
  onClick: PropTypes.func,
};

export default PrevArrow;
