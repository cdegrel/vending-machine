import React from 'react'

const Coin = ({ coin, onClick }) => (
    <div className="coin" onClick={onClick}>{coin.label}</div>
)

export default Coin