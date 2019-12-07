import React from 'react'
import { connect } from 'react-redux'

const CoinSelector = ({ coins }) => {
    return (
        <div className="coin-selector">
            coin selector
        </div>
    )
}

const mapStateToProps = state => ({
    coins: state.coinReducer.coins
})

export default connect(mapStateToProps)(CoinSelector)