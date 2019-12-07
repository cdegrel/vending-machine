import React from 'react'

import ProductList from '../containers/ProductList'
import Balance from '../containers/Balance'
import CoinSelector from '../containers/CoinSelector'

const App = () => {
    return (
        <div className="app">
            <header className="app__header">
                <h1>Vending Machine</h1>
            </header>
            <main className="app__main">
                <ProductList />
                <div>
                    <Balance />
                    <CoinSelector />
                </div>
            </main>
        </div>
    )
}

export default App