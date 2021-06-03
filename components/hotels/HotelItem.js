import Link from "next/link";
import styles from "styles/partials/Hotels.module.scss";
import { IoMdArrowDropright } from "react-icons/io";

const HotelItem = ({ hotel }) => {
  return (
    <>
      <img
        src={hotel.image ? hotel.image.url : hotel.img_url}
        alt={hotel.name}
      />
      <h2>
        <Link href={`/hotels/${hotel.slug}`}>
          <a className={styles.name}>{hotel.name}</a>
        </Link>
      </h2>
      <div className={styles.details}>
        <Link href={`/hotels/${hotel.slug}`}>
          <button className={styles.btn}>
            Details <IoMdArrowDropright />
          </button>
        </Link>
      </div>
    </>
  );
};

export default HotelItem;
