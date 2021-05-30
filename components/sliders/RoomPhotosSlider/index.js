import Slider from "react-slick";
import styles from "styles/partials/PhotosSlider.module.scss";
import HeadlineCenter from "../../shared/HeadlineCenter";
import NextArrow from "../../shared/SliderArrows/NextArrow";
import PrevArrow from "../../shared/SliderArrows/PrevArrow";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PhotosSlider = ({ title, slides }) => {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    variableWidth: true,
    speed: 500,
    nextArrow: (
      <NextArrow
        positionStyles={{
          bottom: "-90px",
          right: "50%",
          transform: "translateX(120%)",
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        positionStyles={{
          bottom: "-90px",
          left: "50%",
          transform: "translateX(-120%)",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          className: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const items = slides.map(({ img }, index) => (
    <div key={index}>
      <LazyLoadImage className={styles.item} alt={title} src={img} />
    </div>
  ));

  return (
    <div id="gallery" className={styles.wrapper}>
      <div className={styles.container}>
        <HeadlineCenter title={title} />
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>{items}</Slider>
        </div>
      </div>
    </div>
  );
};

PhotosSlider.propTypes = {
  title: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.object),
};

PhotosSlider.defaultProps = {
  title: "Photo",
  slides: [],
};

export default PhotosSlider;
