import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import Head from "components/layout/Head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { offersSlides, infrastructureSlides } from "data/home-page";
import { gallerySlides } from "data/gallery-data";
import { roomPreviewSlides } from "data/shared-rooms-data";
import HomePageBanner from "components/pageBanners/HomePageBanner";
import RoomsSlider from "components/sliders/RoomsSlider";
import TextBlock from "components/TextBlock";
import SliderTwo from "components/sliders/SliderTwo";
import SliderOne from "components/sliders/SliderOne";
import { advantagesSlidesData } from "data/vacation";
import styles from "styles/partials/ResortVacation.module.scss";
import axios from "axios";
import { BASE_URL, HOTEL_PATH } from "utils/constants";
const GallerySlider = dynamic(() => import("components/sliders/GallerySlider"));
console.log("My Application Version", BASE_URL);

const Home = () => {
  return (
    <>
      <Head title="Holidaze-booking agency in Bergen" />

      <main>
        <HomePageBanner />
        <section className="section" style={{ position: "relative" }}>
          <SliderOne slides={advantagesSlidesData} />
          <div className={styles.backgroundImages}>
            <LazyLoadImage
              effect="blur"
              wrapperClassName={styles.glasses}
              src={"images/spa.png"}
              alt={"backimage"}
            />
            <LazyLoadImage
              effect="blur"
              wrapperClassName={styles.berry}
              src={"images/berry.png"}
              alt={"foneimage"}
            />
          </div>
        </section>
        <section className="section first">
          <RoomsSlider title={"Hotels"} slides={roomPreviewSlides} />
        </section>

        <section className="section">
          <TextBlock
            subtitle="Wellcome to"
            title="The fjord capital - Bergen"
            content={`
            <p class='text'>
                We have many names for the things we love, and few cities in Norway have more nicknames than Bergen.
                “The heart of the fjords” is one of them.
                Even though Bergen is the second-largest city in Norway, it has the vibe of a small town, packed with charm and urban character.
            </p>
            <p class='text'>
                The UNESCO World Heritage site Bryggen, “The Hanseatic Wharf”, is the most obvious remnant from the time Bergen used to be the centre of trade between Norway and the rest of Europe.
                Today, the wharf houses a museum, shops, galleries, and restaurants, and is a focal point for both locals and visitors.   
            </p>`}
            img="images/bergen.jpg"
            withStarImage={true}
          />
        </section>

        <section className="section">
          <SliderTwo slides={offersSlides} title={"Special Offers"} />
        </section>

        <section className="section">
          <SliderTwo
            slides={infrastructureSlides}
            title={"Explore Norwegian Nature"}
          />
        </section>

        <LazyLoad height={"300px"} offset={1700}>
          <section className="section">
            <GallerySlider title={"Gallery"} props={gallerySlides} />
          </section>
        </LazyLoad>
      </main>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  let hotels = [];

  try {
    const response = await axios.get(`${BASE_URL}${HOTEL_PATH}`);
    console.log(response.data);
    hotels = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotels: hotels },
    revalidate: 1,
  };
}
