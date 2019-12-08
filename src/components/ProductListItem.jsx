import React from 'react'
import PropTypes from 'prop-types'

const ProductListItem = ({ product, selectedIndex, onSelectProduct }) => {
    return (
        <div className={`product-list-item ${product.id === selectedIndex ? 'selected' : ''}`}>
            <h4>{product.name}</h4>
            <div className="product-list-item__info">
                <div>Price: <strong>£{product.price.toFixed(2)}</strong></div>
                <div>Stock: <strong>{product.stock}</strong></div>
            </div>
            <button disabled={product.stock <= 0} onClick={() => onSelectProduct(product.id)} className="btn btn-full product-list-item__select">Select</button>
        </div>
    )
}

ProductListItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
    }),
    selectedIndex: PropTypes.number,
    onSelectProduct: PropTypes.func.isRequired
}

export default ProductListItem