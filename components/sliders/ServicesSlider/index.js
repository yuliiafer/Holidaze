import styles from "styles/partials/ServiceSlider.module.scss";
import Slider from "react-slick";
import PropTypes from "prop-types";
import NextArrow from "../../shared/SliderArrows/NextArrow";
import PrevArrow from "../../shared/SliderArrows/PrevArrow";
import HeadlineCenter from "../../shared/HeadlineCenter";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServicesSlider = ({ slides }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    arrows: true,
    nextArrow: (
      <NextArrow
        positionStyles={{
          bottom: "-45px",
          right: "50%",
          transform: "translateX(120%)",
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        positionStyles={{
          bottom: "-45px",
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
        },
      },
      {
        breakpoint: 550,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div id="places" className={styles.wrapper}>
      <div className={styles.container}>
        <HeadlineCenter title="Services" style={{ marginBottom: 0 }} />
        <div className={styles.sliderWrapper}>
          <Slider {...settings} slidesToShow={4}>
            {slides.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.sliderItemWrapper}>
                    <div className={styles.index}>{"0" + (index + 1)}</div>
                    <div className={styles.imageWrapper}>
                      <LazyLoadImage
                        width={70}
                        effect="blur"
                        height={70}
                        src={item.img}
                        alt={item.text}
                      />
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    {item.link && <div className={styles.btn}>Details</div>}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

ServicesSlider.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default ServicesSlider;
