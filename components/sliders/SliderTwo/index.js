import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import styles from "styles/partials/SliderTwo.module.scss";
import PrevArrow from '../../shared/SliderArrows/PrevArrow'
import NextArrow from '../../shared/SliderArrows/NextArrow'
import cx from 'classnames'
import useMediaQuery from '../../shared/customHooks/useMediaQuery'
import HeadlineCenter from '../../shared/HeadlineCenter'
import PropTypes from 'prop-types'
import SliderTwoItem from "./SliderTwoItem"
const SliderTwo = ({
                                  slides,
                                  title,
                                  titleMobile,
                              }) => 
{
    const settings = {
        infinite: true,
        slidesToShow: slides.length === 1 ? 1 : 3,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        nextArrow: <NextArrow positionStyles={{
            bottom: '-20px',
            right: '50%',
            transform: 'translateX(120%)'
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-120%)'
        }}/>,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    }

    const mobile = useMediaQuery('(max-width: 700px)')
    const [activeSlideIndex, setActiveSlideIndex] = useState()
    const [items, setItems] = useState([])

    useEffect(() => {
        setActiveSlideIndex(mobile ? null : null) 
    }, [mobile]);
    
    useEffect(() => {
        setItems(slides.map((item, index) => {
            const {img, title, description} = item
            return (
                <div className="SliderElement" key={index}>
                    <SliderTwoItem
                        index={index}
                        img={img}
                        title={title}
                        description={description}
                        setActive={setActiveSlideIndex}
                        active={index === activeSlideIndex}
                    />
                </div>
            )
        }))
    }, [activeSlideIndex])

    const containerStyles = cx(styles.container, {[styles.small]: slides.length === 1})

    return (
        <div className={styles.wrapper}>
            <div className={containerStyles}>
                <HeadlineCenter
                    title={useMediaQuery('(max-width: 490px)') ? (titleMobile || title) : title}/>
                <Slider {...settings}>{items}</Slider>
            </div>
        </div>
    )
}

SliderTwo.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    titleMobile: PropTypes.string,
    initialSlideIndex: PropTypes.number
}

SliderTwo.defaultProps = {
    slides: [],
}

export default SliderTwo;
