import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ProductListItem from '../components/ProductListItem'
import { selectProduct } from '../actions'

const ProductList = ({ products, selectedIndex, handleSelectProduct }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductListItem key={product.id} product={product} selectedIndex={selectedIndex} onSelectProduct={handleSelectProduct} />
            ))}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedIndex: PropTypes.number,
    handleSelectProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: state.productReducer.products,
    selectedIndex: state.productReducer.selectedIndex
})

const mapDispatchToProps = dispatch => ({
    handleSelectProduct: id => dispatch(selectProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)