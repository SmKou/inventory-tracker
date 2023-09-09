import PropTypes from 'prop-types'
import Styles from '../assets/Styles'

function ButtonNavigation(props) {
    return <div style={ Styles.btnNavigation.div }>
        {props.buttons.map((btn) => <button style={Styles.btnNavigation.button} onClick={btn.handleClick}>{btn.buttonText}</button>)}
    </div>
}

ButtonNavigation.propTypes = {
    buttons: PropTypes.array.isRequired
}

export default ButtonNavigation;