import React from 'react'

const ProductListItem = ({ product }) => {
    return (
        <div className="product-list-item">
            <h4>{product.name}</h4>
            <div className="product-list-item__info">
                <div>Price: <strong>£{product.price.toFixed(2)}</strong></div>
                <div>Stock: <strong>{product.stock}</strong></div>
            </div>
            <button className="product-list-item__select">Select</button>
        </div>
    )
}

export default ProductListItem