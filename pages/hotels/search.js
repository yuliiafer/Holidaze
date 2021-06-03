import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import HotelItem from "components/hotels/HotelItem";
import { BASE_URL, HOTELS_PATH } from "utils/constants";
import Head from "components/layout/Head";
import styles from "styles/Home.module.scss";

const SearchPage = ({ hotels }) => {
  const router = useRouter();

  return (
    <>
      <Head title="Search resultat" />
      <Link href="/hotels">
        <button>Go Back</button>
      </Link>
      <h1 className={styles.title}>Search Results for {router.query.term}</h1>

      {hotels.length === 0 && <h3>No hotels to show</h3>}

      {hotels.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </>
  );
};

export default SearchPage;

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { adress_contains: term },
        { description_contains: term },
      ],
    },
  });
  const res = await fetch(`${BASE_URL}${HOTELS_PATH}?${query}`);
  const hotels = await res.json();
  return {
    props: { hotels },
  };
}