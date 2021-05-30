import styles from "styles/partials/CircleTip.module.scss";
import cx from 'classnames'
import PropTypes from 'prop-types'


const CircleTip = ({accordionStatus, style, visibleOnDesktop = false}) => {

    const cn = cx(styles.cirqleTip, {[styles.active]: accordionStatus, [styles.forDesktop]: visibleOnDesktop})
    return <span style={style} className={cn}
                 >
        <p>!</p>
    </span>
}

CircleTip.propTypes = {
    accordionStatus: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    visibleOnDesktop: PropTypes.bool
}

export default CircleTip
