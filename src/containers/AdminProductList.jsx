import React from 'react'
import { connect } from 'react-redux'

import AdminProductListItem from '../components/AdminProductListItem'
import { reloadProductStock } from '../actions'

const AdminProductList = ({ products, handleReloadStock }) => {
    const total = products.reduce((acc, curr) => acc + curr.stock, 0)

    return (
        <div className="admin-product-list">
            <header>
                <h2>Products ({ total })</h2>
                <hr/>
            </header>
            <div className="product-list">
                {products.map(product => (
                    <AdminProductListItem key={product.id} product={product} onReloadStock={handleReloadStock} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ productReducer }) => ({
    products: productReducer.products
})

const mapDispatchToProps = dispatch => ({
    handleReloadStock: (id, stock) => dispatch(reloadProductStock(id, stock))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductList)