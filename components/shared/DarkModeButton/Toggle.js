import styles from "styles/partials/DarkMode.module.scss";

const Toggle = ({ checked, onChange }) => (
  <>
    <input
      className={styles.toggleControl}
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </>
);

export default Toggle;
