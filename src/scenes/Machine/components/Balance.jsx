import React from 'react'
import PropTypes from 'prop-types'

const Balance = ({ amount }) => (
    <div className="balance">
        {amount <= 0 ? 'Insert Coin...' : '£'+amount.toFixed(2)}
    </div>
)

Balance.propTypes = {
    amount: PropTypes.number.isRequired
}

export default Balance