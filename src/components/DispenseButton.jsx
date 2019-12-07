import React from 'react'

const DispenseButton = ({ onDispense }) => (
    <button className="btn dispense-button" onClick={onDispense}>Dispense</button>
)

export default DispenseButton