import React from 'react'
import PropTypes from 'prop-types'

const CoinSelectorButton = ({ coin, onIncrementBalance }) => (
    <button className="coin-selector-button" onClick={() => onIncrementBalance(coin.value)}>{coin.label}</button>
)

CoinSelectorButton.propTypes = {
    coin: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }),
    onIncrementBalance: PropTypes.func.isRequired
}

export default CoinSelectorButton