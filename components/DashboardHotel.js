import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import styles from "styles/DashboardEvent.module.css";

const DashboardHotel = ({ hotel, handleDelete }) => {
  return (
    <div className={styles.hotel}>
      <h4>
        <Link href={`/hotels/${hotel.slug}`}>
          <a>{hotel.name}</a>
        </Link>
      </h4>
      <Link href={`/events/edit/${hotel.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>Edit Event</span>
        </a>
      </Link>
      <a
        href="#"
        className={styles.delete}
        onClick={() => handleDelete(hotel.id)}
      >
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  );
};
export default DashboardHotel;
