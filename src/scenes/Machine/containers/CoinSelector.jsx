import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { incrementBalance, reloadCoinStock } from '../../../actions'
import Coin from '../../../components/Coin'

const CoinSelector = ({ coins, handleIncrementBalance, handleReloadCoinStock }) => {
    return (
        <div className="coin-selector">
            {coins.map(coin => (
                <Coin key={coin.id} coin={coin} onClick={() => {
                    handleIncrementBalance(coin.value)
                    handleReloadCoinStock(coin.id)
                }} />
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
    handleReloadCoinStock: id => dispatch(reloadCoinStock(id, 1))
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector)