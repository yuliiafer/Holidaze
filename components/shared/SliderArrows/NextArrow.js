import styles from 'styles/partials/Arrow.module.scss';
import { RiArrowDropRightFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

function NextArrow({positionStyles, onClick}) {
    return (
        <RiArrowDropRightFill
            className={styles.nextArrow}
            style={{ ...positionStyles}}
            onClick={onClick}
        />
    )
}

NextArrow.propTypes = {
    positionStyles: PropTypes.object,
    onClick: PropTypes.func
}

export default NextArrow;