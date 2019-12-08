import React from 'react'

const AdminProductListItem = ({ product, onReloadStock }) => {
    const handleSubmit = e => {
        e.preventDefault()
        const stock = e.target.stock
        onReloadStock(product.id, Number(stock.value))
        stock.value = ""
    }

    return  (
        <div className="product-list-item">
            <h4>{product.name}</h4>
            <div className="product-list-item__info">
                <div>Price: <strong>£{product.price.toFixed(2)}</strong></div>
                <div>Stock: <strong>{product.stock}</strong></div>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="form__field" name="stock" type="number" placeholder="Add stock"/>
                <button className="btn btn-primary btn-full" type="submit">Reloading</button>
            </form>
        </div>
    )
}

export default AdminProductListItem