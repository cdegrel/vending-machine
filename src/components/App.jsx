import React from 'react'

import ProductList from '../containers/ProductList'
import ControllerPanel from '../containers/ControllerPanel'
import ProductPurchasedList from '../containers/ProductPurchasedList'

const App = () => {
    return (
        <div className="app">
            <header className="app__header">
                <h1>Vending Machine</h1>
            </header>
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