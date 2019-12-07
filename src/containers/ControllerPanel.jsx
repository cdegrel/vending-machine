import React from 'react'
import PropTypes from 'prop-types'

import Balance from './Balance'
import CoinSelector from './CoinSelector'
import DispenseButton from '../components/DispenseButton'
import { connect } from 'react-redux'
import { buyProduct } from '../actions'
import PurchaseStatus from '../components/PurchaseStatus'

const ControllerPanel = ({ status, handleBuyProduct }) => {
    return (
        <div className="controller-panel">
            <Balance />
            <CoinSelector />
            <DispenseButton onDispense={handleBuyProduct} />
            <PurchaseStatus status={status} />
        </div>
    )
}

ControllerPanel.propTypes = {
    handleBuyProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    status: state.productPurchasedReducer.status
})

const mapDispatchToProps = dispatch => ({
    handleBuyProduct: () => dispatch(buyProduct())
})

export default connect(mapStateToProps, mapDispatchToProps)(ControllerPanel)