import useDarkMode from "use-dark-mode";
import Toggle from "./Toggle";
import styles from "styles/partials/DarkMode.module.scss";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button className={styles.toggleButton}>
        <span type="button" aria-hidden={true} className={styles.icon}>
        <i className="pi pi-sun" style={{'fontSize': '0.8em'}} onClick={darkMode.disable}></i>
        </span>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <span type="button" aria-hidden={true} className={styles.icon}>
        <i className="pi pi-moon" style={{'fontSize': '0.8em'}} onClick={darkMode.enable}></i>
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;