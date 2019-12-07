import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Balance = ({ value }) => (
    <div className="balance">
        {value <= 0 ? 'Insert Coin...' : '£'+value.toFixed(2)}
    </div>
)

Balance.propTypes = {
    value: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    value: state.balanceReducer.value
})

export default connect(mapStateToProps)(Balance)