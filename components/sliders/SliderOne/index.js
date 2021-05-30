import styles from "styles/partials/Sliders.module.scss";
import Slider from "react-slick";
import HeadlineCenter from "components/shared/HeadlineCenter";
import NextArrow from "components/shared/SliderArrows/NextArrow";
import PrevArrow from "components/shared/SliderArrows/PrevArrow";
import { LazyLoadImage } from "react-lazy-load-image-component";
import propTypes from "prop-types";

const SliderOne = ({ slides }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    nextArrow: (
      <NextArrow
        positionStyles={{
          bottom: "-50px",
          right: "50%",
          transform: "translateX(120%)",
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        positionStyles={{
          bottom: "-50px",
          left: "50%",
          transform: "translateX(-120%)",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const items = slides.map((item, idx) => {
    return (
      <div key={idx} className={styles.sliderItemWrapper}>
        <LazyLoadImage
          effect="blur"
          width={62}
          height={62}
          src={item.img}
          alt={item.title}
        />
        <h5>{item.title}</h5>
        <p dangerouslySetInnerHTML={{ __html: item.text }} />
      </div>
    );
  });

  return (
    <div id="places" className={styles.wrapper}>
      <div className={styles.container}>
        <HeadlineCenter style={{ marginBottom: 0 }} title={"Advantage"} />
        <div className={styles.sliderWrapper}>
          <Slider {...settings} slidesToShow={4}>
            {items}
          </Slider>
        </div>
      </div>
    </div>
  );
};

SliderOne.propTypes = {
  slides: propTypes.arrayOf(propTypes.object).isRequired,
};

SliderOne.defaultProps = {
  slides: [],
};

export default SliderOne;
