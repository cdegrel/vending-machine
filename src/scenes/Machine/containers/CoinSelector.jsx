import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CoinSelectorButton from '../components/CoinSelectorButton'
import { incrementBalance, reloadCoinStock } from '../../../actions'

const CoinSelector = ({ coins, handleIncrementBalance, handleReloadCoinStock }) => {
    return (
        <div className="coin-selector">
            {coins.map(coin => (
                <CoinSelectorButton key={coin.id} coin={coin} onIncrementBalance={handleIncrementBalance} onReloadCoinStock={handleReloadCoinStock} />
            ))}
        </div>
    )
}

CoinSelector.propTypes = {
    coins: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleIncrementBalance: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    coins: state.coinReducer.coins
})

const mapDispatchToProps = dispatch => ({
    handleIncrementBalance: value => dispatch(incrementBalance(value)),
    handleReloadCoinStock: (id, stock) => dispatch(reloadCoinStock(id, stock))
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector)