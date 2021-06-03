import styles from "styles/partials/Menu.module.scss";
import Link from "next/link";

const Menu = ({ menuOpened, toggleMenu }) => {
  return (
    <div
      className={
        !menuOpened
          ? styles.menuWrapper
          : styles.menuWrapper + " " + styles.opened
      }
    >
      <nav className={styles.flexContainer}>
        <div className={styles.col}>
          <div className={styles.menuItem} onClick={toggleMenu}>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.menuItem} onClick={toggleMenu}>
            <Link href={"/hotels"}>
              <a>Hotels</a>
            </Link>
          </div>
          <div className={styles.menuItem} onClick={toggleMenu}>
            <Link href={"/rooms"}>
              <a>Rooms</a>
            </Link>
          </div>
          <div className={styles.menuItem} onClick={toggleMenu}>
            <Link href={"/about-us"}>
              <a>About Us</a>
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.menuItem} onClick={toggleMenu}>
            <Link href={"/contacts"}>
              <a>Contacts</a>
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.menuItem} onClick={toggleMenu}>
            <Link href={"/login-page"}>
              <a>Login</a>
            </Link>
          </div>
        </div>
        <div className={`${styles.col}`}>
          <div className={styles.location}>
            <i className="pi pi-map-marker"></i>
            Bergen, Norway
          </div>
          <div className={styles.phone}>
            <i className="pi pi-phone"></i>
            +47 12345678
          </div>
          <div className={styles.icons}>
            <a target={"_blank"} href="/">
              <i className="pi pi-facebook"></i>
            </a>
            <a target={"_blank"} href="/">
              <i className="pi pi-twitter"></i>
            </a>
            <a target={"_blank"} href="/">
              <i className="pi pi-github"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
