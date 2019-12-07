import React from 'react'

import ProductList from '../containers/ProductList'
import ControllerPanel from '../containers/ControllerPanel'

const Machine = () => (
    <>
        <div className="machine">
            <ProductList />
            <ControllerPanel />
        </div>
    </>
)

export default Machine