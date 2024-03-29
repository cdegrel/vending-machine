import React from 'react'

const DispenseButton = ({ onDispense }) => (
    <button className="btn btn-accent btn-full dispense-button" onClick={onDispense}>Dispense</button>
)

export default DispenseButton