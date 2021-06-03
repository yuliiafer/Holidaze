import Head from "components/layout/Head";
import styles from "styles/partials/HeroImage.module.scss";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL, HOTELS_PATH } from "utils/constants";
import Link from "next/link";
import { FaPen } from "react-icons/fa";
import DescriptionRoomBlock from "components/shared/DescriptionRoomBlock";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MdLocationOn,
  MdClear,
  MdWifi,
  MdAcUnit,
  MdLocalBar,
  MdRestaurant,
  MdFreeBreakfast,
  MdSmokeFree,
  MdRoomService,
  MdLocalParking,
  MdPets,
  MdAirplanemodeActive,
} from "react-icons/md";

const Hotel = ({ hotel }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }
  const deleteHotel = async (e) => {
    console.log(deleteHotel(e));
    if (confirm("Are you sure?")) {
      const res = await fetch(`${BASE_URL}${HOTELS_PATH}${hotel.slug}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/hotel");
      }
    }
  };

  return (
    <>
      <Head title={hotel.name} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            <div className={styles.stars}></div>
            <p className={styles.text}>Rooms and Prices</p>
            <h1 className={styles.title}>{hotel.name}</h1>
            <h3 className={styles.subtitle}>
              Category: {hotel.categories.map(({ name }) => name).join("")}
            </h3>
          </div>
          <img
            className={styles.circlesBlock}
            src={"/images/circles.png"}
            alt={"background"}
          />
        </div>
        <div
          className={styles.banner}
          style={{
            backgroundImage: 'url("images/hotel14.jpg")',
            position: "absolute",
            top: "0",
          }}
        >
          <img
            style={{
              width: "100%",
              position: "absolute",
              top: "0",
              height: "100vh",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
            src={hotel.image ? hotel.image.url : hotel.img_url}
            alt={hotel.name}
          />
        </div>
      </div>

      <section className="section first">
        <DescriptionRoomBlock
          title='Facilities'
          description={hotel.description}
        />
      </section>

      <div className={styles.col}>
        <div className={styles.column}>
          <div className={styles.divs}>
            <div>
            <h3>Most popular facilities</h3>
            <MdWifi />
            </div>
            <div></div>
            <p>Free Wi-Fi {hotel.internet}</p>
            <MdRestaurant />
            <p>Breakfast {hotel.breakfast}</p>
            <MdAcUnit />
            <p>Air Conditioner {hotel.airconditioner}</p>
            <MdFreeBreakfast />
            <p>Tea/coffee maker in room {hotel.tea_coffee_maker}</p>
            <MdLocalBar />
            <p>Bar {hotel.bar}</p>
            <MdSmokeFree />
            <p>Non smoking room {hotel.non_smoking_room}</p>
            <MdRoomService />
            <p>Room Service {hotel.roomCleanin}</p>
            <MdPets />
            <p>Pets allow {hotel.pets}</p>
            <MdAirplanemodeActive />
            <p>Airport shuttle {hotel.airport_shuttle}</p>
            <MdLocalParking />
            <p>Parking {hotel.parking}</p>
          </div>
          <div className={styles.divs}>
            <MdLocationOn />
            <p>Adress: {hotel.adress}</p>
          </div>
        
     </div></div>
     <div className={styles.abutton}>
      <Link href={`/hotel/edit/${hotel.id}`}>
        <a className={styles.a}>
          <FaPen /> Edit Hotel
        </a>
      </Link>
      <a href="#" className={styles.abutton} onClick={deleteHotel}>
        <MdClear />
        Delete Hotel
      </a> </div>
    </>
  );
};

export default Hotel;

export const getStaticPaths = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${HOTELS_PATH}`);
    const hotels = response.data;
    const paths = hotels.map((hotel) => ({
      params: { slug: hotel.slug },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async ({ params: { slug } }) => {
  const url = `${BASE_URL}${HOTELS_PATH}/?slug=${slug}`;
  let hotelSlug = null;
  try {
    const response = await axios.get(url);
    hotelSlug = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      hotel: hotelSlug[0],
    },
    revalidate: 1,
  };
};
