import React from 'react'
import { connect } from 'react-redux'

import CoinSelectorButton from '../components/CoinSelectorButton'

const CoinSelector = ({ coins }) => {
    return (
        <div className="coin-selector">
            {coins.map(coin => (
                <CoinSelectorButton key={coin.id} coin={coin} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    coins: state.coinReducer.coins
})

export default connect(mapStateToProps)(CoinSelector)