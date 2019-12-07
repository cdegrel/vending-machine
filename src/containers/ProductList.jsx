import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from '../components/ProductListItem'

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.productReducer.products
})

export default connect(mapStateToProps)(ProductList)