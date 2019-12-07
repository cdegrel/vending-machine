import React from 'react'

const CoinSelectorButton = ({ coin }) => (
    <button className="coin-selector-button">{coin.label}</button>
)

export default CoinSelectorButton