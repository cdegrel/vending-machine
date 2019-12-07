import React from 'react'
import { connect } from 'react-redux'

const ProductList = ({ products }) => {
    console.log(products)
    return (
        <div className="product-list">
            product-list
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.productReducer.products
})

export default connect(mapStateToProps)(ProductList)