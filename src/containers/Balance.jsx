import React from 'react'
import { connect } from 'react-redux'

const Balance = ({ value }) => (
    <div className="balance">
        £ {value.toFixed(2)}
    </div>
)

const mapStateToProps = state => ({
    value: state.balanceReducer.value
})

export default connect(mapStateToProps)(Balance)