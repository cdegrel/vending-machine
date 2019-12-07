import React from 'react'

import { connect } from 'react-redux'
import ProductPurchasedListItem from '../components/ProductPurchasedListItem'

const ProductPurchasedList = ({ products }) => {
    console.log(products)
    return (
        <div className="product-purchased-list">
            <header>
                <h2>Purchased Product</h2>
                <hr />
            </header>
            <div className="product-purchased-list__list">
                {products.map(product => (
                    <ProductPurchasedListItem key={product.id} product={product} onSelectProduct={null} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.productPurchasedReducer.products.map(id => state.productReducer.products.find(product => product.id === id))
})

export default connect(mapStateToProps)(ProductPurchasedList)