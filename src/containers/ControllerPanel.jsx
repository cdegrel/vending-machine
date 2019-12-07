import React from 'react'

import Balance from './Balance'
import CoinSelector from './CoinSelector'
import DispenseButton from '../components/DispenseButton'
import { connect } from 'react-redux'
import { buyProduct } from '../actions'
import PurchaseStatus from '../components/PurchaseStatus'

const ControllerPanel = ({ selectedIndex, status, handleBuyProduct }) => {
    return (
        <div className="controller-panel">
            <Balance />
            <CoinSelector />
            <DispenseButton onDispense={() => handleBuyProduct(selectedIndex)} />
            <PurchaseStatus status={status} />
        </div>
    )
}

const mapStateToProps = state => ({
    selectedIndex: state.productReducer.selectedIndex,
    status: state.productPurchasedReducer.status
})

const mapDispatchToProps = dispatch => ({
    handleBuyProduct: selectedIndex => dispatch(buyProduct(selectedIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(ControllerPanel)