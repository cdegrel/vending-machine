import React from 'react'
import PropTypes from 'prop-types'

import Balance from './Balance'
import CoinSelector from './CoinSelector'
import DispenseButton from '../components/DispenseButton'
import { connect } from 'react-redux'
import { buyProduct } from '../actions'

const ControllerPanel = ({ handleBuyProduct }) => {
    return (
        <div className="controller-panel">
            <Balance />
            <CoinSelector />
            <DispenseButton onDispense={handleBuyProduct} />
        </div>
    )
}

ControllerPanel.propTypes = {
    handleBuyProduct: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    handleBuyProduct: () => dispatch(buyProduct())
})

export default connect(null, mapDispatchToProps)(ControllerPanel)