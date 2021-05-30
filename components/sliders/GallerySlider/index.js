import Slider from "react-slick";
import styles from "styles/partials/GallerySliders.module.scss";
import GallerySliderItem from "./GallerySliderItem";
import HeadlineCenter from "../../shared/HeadlineCenter";
import NextArrow from "../../shared/SliderArrows/NextArrow";
import PrevArrow from "../../shared/SliderArrows/PrevArrow";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import propTypes from "prop-types";

const GallerySlider = ({ title, props }) => {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 330,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "20px",
        },
      },
    ],
    nextArrow: (
      <NextArrow
        positionStyles={{
          bottom: "-75px",
          right: "50%",
          transform: "translateX(120%)",
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        positionStyles={{
          bottom: "-75px",
          left: "50%",
          transform: "translateX(-120%)",
        }}
      />
    ),
  };
  const items = props.map(({ img }, index) => {
    return (
      <div className="SliderElement" key={index}>
        <GallerySliderItem img={img} />
      </div>
    );
  });
  const options = {
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
    },
    caption: {
      showCaption: false,
    },
  };

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <div id="gallery" className={styles.wrapper}>
          <div className={styles.container}>
            <HeadlineCenter title={title} />
            <Slider {...settings}>{items}</Slider>
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

GallerySlider.propTypes = {
  title: propTypes.string,
};

GallerySlider.defaultProps = {
  props: [],
  title: "Gallery",
};

export default GallerySlider;
