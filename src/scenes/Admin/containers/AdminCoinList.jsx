import React from 'react'
import { connect } from 'react-redux'
import AdminCoinListItem from '../components/AdminCoinListItem'
import { reloadCoinStock } from '../../../actions'

const AdminCoinList = ({ coins, handleReloadStock }) => {
    const total = coins.reduce((acc, curr) => acc + curr.stock * curr.value, 0)

    return (
        <div className="product">
            <header>
                <h2>Coins (£{total})</h2>
                <hr/>
            </header>
            <div className="flex">
                {coins.map(coin => (
                    <AdminCoinListItem key={coin.id} coin={coin} onReloadStock={handleReloadStock} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ coinReducer })  => ({
    coins: coinReducer.coins
})

const mapDispatchToProps = dispatch => ({
    handleReloadStock: (id, stock) => dispatch(reloadCoinStock(id, stock))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminCoinList)