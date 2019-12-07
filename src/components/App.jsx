import React from 'react'

import Header from './Header'

import ProductList from '../containers/ProductList'
import ControllerPanel from '../containers/ControllerPanel'
import ProductPurchasedList from '../containers/ProductPurchasedList'

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="app__main">
                <div className="vending-machine">
                    <ProductList />
                    <ControllerPanel />
                </div>
                <ProductPurchasedList />
            </main>
        </div>
    )
}

export default App