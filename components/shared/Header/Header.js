import { useState, useEffect } from "react";
import styles from "styles/partials/Header.module.scss";
import Link from "next/link";
import Menu from "./Menu/Menu";
import PopupContactForm from "../../ContactForm/PopupContactForm";
import { CgProfile } from "react-icons/cg";
import { MdMail } from "react-icons/md";

const CustomLink = ({
  title,
  style,
  icon,
  link = "#",
  extraClass = null,
  onClickHandler,
  href = "#",
}) => {
  if (href)
    return (
      <Link
        href={href}
        onClick={onClickHandler ? onClickHandler : null}
        style={style}
      >
        <a className={styles.link + " " + extraClass}>
          {icon && <img src={icon} alt={title} />}
          {title && <div>{title}</div>}
        </a>
      </Link>
    );

  return (
    <Link
      onClick={onClickHandler ? onClickHandler : null}
      style={style}
      href={link}
    >
      <a className={styles.link + " " + extraClass}>
        {icon && <img src={icon} alt={title} />}
        {title && <div>{title}</div>}
      </a>
    </Link>
  );
};

const Header = () => {
  let [scrolledFromTop, setScrolledFromTop] = useState(0);
  let [menuOpened, setMenuOpened] = useState(false);
  let [popupOpened, setPopupOpened] = useState(false);
  const [innerHeight, setInnerHeight] = useState();

  const listenToScroll = () => {
    const scroll = document.body.scrollTop || document.scrollTop;
    setScrolledFromTop(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    setInnerHeight(window.innerHeight);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpened((status) => !status);
  };

  return (
    <>
      <header className={styles.wrapper}>
        <Menu toggleMenu={toggleMenu} menuOpened={menuOpened} />

        <div className={styles.container}>
          <div
            className={
              scrolledFromTop > innerHeight / 3
                ? `${styles.content} ${styles.minified}`
                : styles.content
            }
          >
            <div
              className={
                menuOpened
                  ? styles.menuIcon + " " + styles.opened
                  : styles.menuIcon
              }
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.leftBlock}>
              <CustomLink title={"Home"} href={"/"} />
              <CustomLink title={"Hotels"} href={"/hotels"} />
              <CustomLink title={"Rooms"} href={"/rooms"} />
              <CustomLink title={"About Us"} href={"/about-us"} />
              <CustomLink title={"Contact"} href={"/contacts"} />
            </div>
            <div className={styles.logo}>
              <Link href={"/"}>
                <a>
                  <div className={styles.logoWrapper}>
                    <img src={"/images/logoH.svg"} alt="Holidaze" />
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.rightBlock}>
              <Link href={"/"}>
                <a className={styles.button}>
                  <CgProfile />
                </a>
              </Link>
              
              <div
                className={styles.button}
                onClick={() => setPopupOpened(true)}
              >
                <MdMail
                />
              </div>
            </div>
          </div>
        </div>
        <PopupContactForm
          popupOpen={popupOpened}
          setPopupOpen={setPopupOpened}
          popupTitleText={"Plese write your information"}
          submitBtnText="Wait for call"
          formName={`Contact form`}
          swalText={"We vill call you back"}
          withName
          withPhone
        />
      </header>
    </>
  );
};

export default Header;