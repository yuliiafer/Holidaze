import styles from "styles/partials/Footer.module.scss";
import useMediaQuery from "../customHooks/useMediaQuery";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import LazyLoad from "react-lazyload";
import Link from "next/link";
import {
  SiMailDotRu,
  SiGooglemaps,
  SiInstagram,
  SiGithub,
  SiFacebook,
} from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const MapBlock = () => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  return (
    <div className={styles.mapWrapper}>
      <YMaps
        preload={false}
        query={{ load: "control.ZoomControl", lang: "en_RU" }}
      >
        <Map
          width={"100%"}
          instanceRef={(ref) => {
            ref &&
              ref.behaviors.disable("scrollZoom") &&
              isMobile &&
              ref.behaviors.disable("drag");
          }}
          height={"100%"}
          defaultState={{
            center: isMobile
              ? [60.394728593010306, 5.325608673516545]
              : [60.394734593010306, 5.325628673516545],
            zoom: 16,
            controls: ["zoomControl"],
          }}
        >
          <Placemark
            geometry={[60.394728593010306, 5.325608673516545]}
            options={{
              iconLayout: "default#icon",
              iconImageHref: "/images/logo.png",
              iconImageSize: isMobile ? [140, 100] : [160, 120],
              iconImageOffset: isMobile ? [-65, -100] : [0, 0],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <LazyLoad height={"300px"} offset={300}>
          <MapBlock />
        </LazyLoad>
        <div className={styles.contactBlock}>
          <h3 className={styles.title}>Contacts: </h3>
          <div className={styles.contacts}>
            <div className={styles.item}>
              <SiGooglemaps />
              <p>Bergen, Norway</p>
            </div>
            <a className={styles.item} href="tel:+471234567">
              <FaPhoneAlt />
              <p>+471234567</p>
            </a>
            <a className={styles.item} href="mailto:holidaze@test.test">
              <SiMailDotRu />
              <p>holidaze@test.test</p>
            </a>
          </div>
          <div className={styles.iconsBlock}>
            <Link href={"#"}>
              <a className={styles.icon}>
                <SiInstagram size="1.5em" />
              </a>
            </Link>
            <Link href={"#"}>
              <a className={styles.icon}>
                <SiFacebook size="1.5em" />
              </a>
            </Link>
            <Link href={"#"}>
              <a target="_blank" className={styles.icon}>
                <SiGithub size="1.5em" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerGray}>
        <p>
          Holidaze
          <span className={styles.thinLine}>&nbsp; | &nbsp;</span>
          <a href="https://y-ferreira.eu/" className={styles.managedBy}>
            Copyright &copy; Yuliia Ferreira {new Date().getFullYear()}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
