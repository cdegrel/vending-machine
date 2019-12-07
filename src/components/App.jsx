import React from 'react'

import ProductList from '../containers/ProductList'
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
                    <CoinSelector />
                </div>
            </main>
        </div>
    )
}

export default App