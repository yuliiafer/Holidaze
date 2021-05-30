import { BASE_URL } from "utils/constants";
import Image from 'next/image'
import styles from "styles/Home.module.scss";
export const ImagesApi = (images_url) => {
  return (
    <>
         
        <div className={styles.divs}>
          <Image
            src={images_url.map(({url}) => url).join("")}
            width={100}
            height={100}
            alt={images_url.name}
          />
        </div>
      
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${HOTELS_PATH}/?slug=${slug}`);
    const hotels = response.data.data;
    const paths = hotels.map((hotel) => ({
      params: { images_url: (hotel.images_url) },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async ({ params: { images_url } }) => {
  const url = `${BASE_URL}${HOTELS_PATH}/?slug=${slug}/?images_url=${images_url}`;
  let hotelSlug = null;
  try {
    const response = await axios.get(url);
    hotelSlug = response.data.data;
    console.log(hotelSlug);
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      images_url: hotelSlug[0],
    },
    revalidate: 1,
  };
};