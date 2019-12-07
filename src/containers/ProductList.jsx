import React from 'react'
import PropTypes from 'prop-types'
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

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
    products: state.productReducer.products
})

export default connect(mapStateToProps)(ProductList)