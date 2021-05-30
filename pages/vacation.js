import dynamic from "next/dynamic";
import Head from "components/layout/Head";
import styles from "styles/partials/ResortVacation.module.scss";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { offersSlides } from "../data/home-page";
import { gallerySlides } from "../data/gallery-data";
import { roomPreviewSlides } from "../data/shared-rooms-data";
import { advantagesSlidesData, servicesSlides } from "../data/vacation";
import ContactPageBanner from "../components/pageBanners/ContactPageBanner";
import SliderOne from "../components/sliders/SliderOne";
import RoomsSlider from "../components/sliders/RoomsSlider";
import SliderThree from "../components/sliders/SliderThree";
import ServicesSlider from "../components/sliders/ServicesSlider";
const GallerySlider = dynamic(() =>
  import("../components/sliders/GallerySlider")
);

const ResortVacation = () => {
  return (
    <>
      <Head title="Holidaze - hotel agency in Bergen" />
      <main>
        <ContactPageBanner />
        <section className="section first" style={{ position: "relative" }}>
          <SliderOne slides={advantagesSlidesData} />
          <div className={styles.backgroundImages}>
            <LazyLoadImage
              effect="blur"
              wrapperClassName={styles.glasses}
              src={"/images/resort-vacation/glasses.png"}
              alt={"backimage"}
            />
            <LazyLoadImage
              effect="blur"
              wrapperClassName={styles.berry}
              src={"/images/resort-vacation/yagody.png"}
              alt={"foneimage"}
            />
          </div>
        </section>

        <section className="section">
          <RoomsSlider title="Hotels and prices" slides={roomPreviewSlides} />
        </section>

        <section className="section">
          <ServicesSlider slides={servicesSlides} />
        </section>

        <section className="section">
          <SliderThree slides={offersSlides} title="Offers" />
        </section>

        <LazyLoad height="300px" offset={1700}>
          <section className="section">
            <GallerySlider slides={gallerySlides} title="Gallery" />
          </section>
        </LazyLoad>
      </main>
    </>
  )
}

export default ResortVacation;
