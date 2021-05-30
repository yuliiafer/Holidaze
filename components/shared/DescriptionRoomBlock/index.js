import styles from "styles/partials/DescriptionRoom.module.scss";
import Slider from "react-slick";
import HeadlineCenter from "../HeadlineCenter";
import PropTypes from "prop-types";
import Link from "next/link";

const DescriptionRoomBlock = ({
  title,
  icons,
  slidesToShow,
  link,
  description,
}) => {
  const settings = {
    infinite: false,
    slidesToShow: slidesToShow || icons.length,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          variableWidth: true,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <HeadlineCenter title={title} />
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {icons.map((item, index) => {
              return (
                <div key={index} className={styles.iconWrapper}>
                  <img className={styles.icon} src={item.img} alt="icon" />
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {link && (
          <Link href={link}>
            <a className={styles.button}>Book</a>
          </Link>
        )}
      </div>
    </div>
  );
};

DescriptionRoomBlock.propTypes = {
  title: PropTypes.string.isRequired,
  slidesToShow: PropTypes.number,
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

DescriptionRoomBlock.defaultProps = {
  icons: [],
};

export default DescriptionRoomBlock;
