import React from 'react'
import Coin from '../../../components/Coin'

const AdminCoinListItem = ({ coin, onReloadStock }) => {
    const handleSubmit = e => {
        e.preventDefault()
        const stock = e.target.stock
        onReloadStock(coin.id, Number(stock.value))
        stock.value = ""
    }

    return (
        <div className="coin-list-item">
            <div className="coin-list-item__info">
                <Coin coin={coin} />
                <strong>x</strong>
                <div>{coin.stock}</div>
                <strong>=</strong>
                <div>£{(coin.value * coin.stock).toFixed(2)}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="form__field" name="stock" type="number" placeholder="add / remove quantity"/>
                <button className="btn btn-primary" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AdminCoinListItem