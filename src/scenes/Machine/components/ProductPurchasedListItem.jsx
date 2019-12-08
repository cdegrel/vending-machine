import React from 'react'

import Coin from '../../../components/Coin'

const ProductPurchasedListItem = ({ purchase }) => (
    <div className="product-list-item">
        <h4>{purchase.product.name}</h4>
        {purchase.coins.map(coin => (
            <div key={coin.id} className="flex">
                <Coin coin={coin} />
                <div> x <strong>{coin.stock}</strong></div>
            </div>
        ))}
    </div>
)

export default ProductPurchasedListItem