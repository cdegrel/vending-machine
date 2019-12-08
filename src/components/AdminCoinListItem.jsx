import React from 'react'

const AdminCoinListItem = ({ coin, onReloadStock }) => {
    const handleSubmit = e => {
        e.preventDefault()
        const stock = e.target.stock
        onReloadStock(coin.id, Number(stock.value))
        stock.value = ""
    }

    return (
        <div className="coin-list-item">
            <div className="flex">
                <div className="coin-selector-button">{coin.label}</div>
                <strong>x</strong>
                <div>{coin.stock}</div>
                <strong>=</strong>
                <div>£{(coin.value * coin.stock).toFixed(2)}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="form__field" name="stock" type="number" placeholder="Add quantity"/>
                <button className="btn" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AdminCoinListItem