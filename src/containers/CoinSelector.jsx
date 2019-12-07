import React from 'react'
import PropTypes from 'prop-types'
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

CoinSelector.propTypes = {
    coins: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleIncrementBalance: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    coins: state.coinReducer.coins
})

const mapDispatchToProps = dispatch => ({
    handleIncrementBalance: value => dispatch(incrementBalance(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector)