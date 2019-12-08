import React from 'react'

import { connect } from 'react-redux'
import ProductPurchasedListItem from '../components/ProductPurchasedListItem'

const ProductPurchasedList = ({ purchases }) => {
    return (
        <div className="product-purchased-list">
            <header>
                <h2>Purchased Products</h2>
                <hr />
            </header>
            <div className="product-purchased-list__list">
                {purchases.map((purchase, index) => (
                    <ProductPurchasedListItem key={index} purchase={purchase} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    purchases: state.productPurchasedReducer.purchases.map(purchase => {
        return {
            ...purchase,
            product: state.productReducer.products.find(product => product.id === purchase.product),
        }
    })
})

export default connect(mapStateToProps)(ProductPurchasedList)