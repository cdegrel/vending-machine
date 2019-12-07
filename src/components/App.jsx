import React from 'react'

import ProductList from '../containers/ProductList'
import ControllerPanel from '../containers/ControllerPanel'

const App = () => {
    return (
        <div className="app">
            <header className="app__header">
                <h1>Vending Machine</h1>
            </header>
            <main className="app__main">
                <ProductList />
                <ControllerPanel />
            </main>
        </div>
    )
}

export default App