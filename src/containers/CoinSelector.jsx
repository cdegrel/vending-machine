import React from 'react'
import { connect } from 'react-redux'

import CoinSelectorButton from '../components/CoinSelectorButton'
import { incrementBalance } from '../actions'

const CoinSelector = ({ coins, handleIncrementBalance }) => {
    return (
        <div className="coin-selector">
            {coins.map(coin => (
                <CoinSelectorButton key={coin.id} coin={coin} onIncrementBalance={handleIncrementBalance} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    coins: state.coinReducer.coins
})

const mapDispatchToProps = dispatch => ({
    handleIncrementBalance: value => dispatch(incrementBalance(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector)