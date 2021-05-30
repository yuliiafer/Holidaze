import styles from "styles/partials/SlidersThree.module.scss";
import PrevArrow from "../../shared/SliderArrows/PrevArrow";
import NextArrow from '../../shared/SliderArrows/NextArrow';
import Slider from "react-slick";
import OffersSliderItem from "./SliderThreeItem";
import HeadlineCenter from '../../shared/HeadlineCenter';
import PropTypes from 'prop-types';

const SlidersThree = ({slides, title}) => {

    const settings = {
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "15px",
            left: '50%',
            transform: 'translateX(900%)'
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "15px",
            left: '50%',
            transform: 'translateX(750%)'
        }}/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = slides.map((item, index) => {
        const {img, title, subtitle, link} = item;
        return (
            <div className="SliderElement" key={index}>
                <OffersSliderItem
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    active={index === 1}
                    link={link}
                />
            </div>
        );
    });

    return (
        <div className={styles.sliderContainer}>
            <HeadlineCenter title={title}/>
            <div className={styles.sliderWrapper}>
                <Slider {...settings}>{items}</Slider>
            </div>
        </div>
    )
}


SlidersThree.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
}

SlidersThree.defaultProps = {
    slides: [],
    title: 'Title'
}

export default SlidersThree;