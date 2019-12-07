import React from 'react'

const CoinSelectorButton = ({ coin, onIncrementBalance }) => (
    <button className="coin-selector-button" onClick={() => onIncrementBalance(coin.value)}>{coin.label}</button>
)

export default CoinSelectorButton