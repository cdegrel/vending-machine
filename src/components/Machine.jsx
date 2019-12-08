import React from 'react'

import ProductList from '../containers/ProductList'
import ControllerPanel from '../containers/ControllerPanel'
import ProductPurchasedList from '../containers/ProductPurchasedList'

const Machine = () => (
    <>
        <div className="machine">
            <ProductList />
            <ControllerPanel />
        </div>
        <ProductPurchasedList />
    </>
)

export default Machine