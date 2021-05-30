import styles from "styles/partials/SliderTwoItem.module.scss";
import cx from 'classnames'
import useMediaQuery from '../../../shared/customHooks/useMediaQuery'
import PropTypes from 'prop-types';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const SliderTwoItem = ({
                                      img,
                                      title,
                                      description,
                                      active,
                                      setActive,
                                      index
                                  }) => {

    const classNames = cx([styles.card], {[styles.active]: active})

    const handleClick = () => {
        setActive(active ? null : index)
    }

    return (
        <div className={classNames}>

            <LazyLoadImage
                effect="blur"
                wrapperClassName={styles.img}
                src={img}
                alt={title}
            />

            <div className={styles.content}>
                <h6 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>

                <div className={styles.description}>
                    <p dangerouslySetInnerHTML={{__html: description}}
                       style={useMediaQuery('(max-width: 490px)') ? {} : {marginBottom: '10px'}}/>
                </div>

                <div className={styles.moreBtn} onClick={handleClick}>
                    {active ? "Close" : "Details"}
                </div>

            </div>

        </div>)
}

SliderTwoItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

export default SliderTwoItem;
