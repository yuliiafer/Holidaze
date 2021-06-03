import Head from "components/layout/Head";
import axios from "axios";
import { BASE_URL, HOTELS_PATH } from "utils/constants";
import HotelItem from "components/hotels/HotelItem";
import RoomsAndPricesBanner from "components/pageBanners/RoomsAndPricesBanner";
import styles from "styles/Home.module.scss";

const Hotels = (props) => {
  return (
    <>
      <Head title="Hotels" />
      <main>
        <RoomsAndPricesBanner />

        {props.length === 0 && <h3>No hotels to show</h3>}
        {props.hotels.map((hotel) => (
          <div className={styles.main}>
            <div className={styles.card} key={hotel.id}>
              <HotelItem key={hotel.slug} hotel={hotel} />
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Hotels;

export async function getStaticProps() {
  let hotels = [];

  try {
    const response = await axios.get(`${BASE_URL}${HOTELS_PATH}`);
    console.log(response.data);
    hotels = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotels },
    revalidate: 1,
  };
}
