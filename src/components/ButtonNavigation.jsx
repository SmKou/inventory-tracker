import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../assets/Styles'

const makeKey = str => str.split(" ").join("-") + "-btn"

function ButtonNavigation(props) {
    return <div style={ Styles.btnNavigation.div }>
        {props.buttons.map((btn) => <button style={Styles.btnNavigation.button} onClick={btn.handleClick} key={makeKey(btn.buttonText)}>{btn.buttonText}</button>)}
    </div>
}

ButtonNavigation.propTypes = {
    buttons: PropTypes.array.isRequired
}

export default ButtonNavigation;