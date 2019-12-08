import React from 'react'

import ProductList from './containers/ProductList'
import ControllerPanel from './containers/ControllerPanel'
import ProductPurchasedList from './containers/ProductPurchasedList'

const Machine = () => (
    <div className="machine">
        <div className="machine__control">
            <ProductList />
            <ControllerPanel />
        </div>
        <ProductPurchasedList />
    </div>
)

export default Machine