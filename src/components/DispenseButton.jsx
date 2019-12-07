import React from 'react'
import PropTypes from 'prop-types'

const DispenseButton = ({ onDispense }) => (
    <button className="btn dispense-button" onClick={onDispense}>Dispense</button>
)

DispenseButton.propTypes = {
    onDispense: PropTypes.func.isRequired
}

export default DispenseButton