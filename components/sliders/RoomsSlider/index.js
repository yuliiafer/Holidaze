import {useEffect, useState, useRef} from 'react'
import Slider from 'react-slick'
import styles from "styles/partials/RoomsSlidersItem.module.scss";
import RoomsSliderItem from './RoomsSliderItem'
import HeadlineCenter from '../../shared/HeadlineCenter'
import NextArrow from '../../shared/SliderArrows/NextArrow'
import PrevArrow from '../../shared/SliderArrows/PrevArrow'
import PropTypes from 'prop-types'

const RoomsSlider = ({
                        slides,
                        title
                    }) => {

    let [indexSlide, setIndexSlide] = useState(0)

    const items = slides.map((item, index) => {
        const {
            img,
            data
        } = item;
        return (
            <div className="sliderElement" key={index}>
                <RoomsSliderItem
                    img={img}
                    {...data}
                />
            </div>
        )
    })

    const afterChangeHandler = index => setIndexSlide(index)

    const settings = {
        slidesToShow: 1,
        initialSlide: 0,
        afterChange: afterChangeHandler,
        dots: false,
        className: 'center',
        centerMode: false,
        infinite: false,
        centerPadding: '60px',
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow onClick={() => setIndexSlide(indexSlide + 1)} positionStyles={{
            bottom: '-90px',
            left: '50%',
            transform: 'translateX(900%)'
        }}/>,
        prevArrow: <PrevArrow onClick={() => setIndexSlide(indexSlide - 1)} positionStyles={{
            bottom: '-90px',
            left: '50%',
            transform: 'translateX(750%)'
        }}/>,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    initialSlide: 0,
                    className: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    }

    useEffect(() => {
        sliderRef.current.slickGoTo(indexSlide)
    }, [indexSlide])

    const sliderRef = useRef()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <HeadlineCenter title={title}/>
                <Slider ref={sliderRef} {...settings}>{items}</Slider>
            </div>

        </div>
    )
}


RoomsSlider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
}

RoomsSlider.defaultProps = {
    slides: [],
    title: 'Title'
}

export default RoomsSlider
