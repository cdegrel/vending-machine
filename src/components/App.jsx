import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Machine from './Machine'
import Admin from './Admin'

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="app__main">
                <Switch>
                    <Route exact path="/" component={Machine}/>
                    <Route path="/admin" component={Admin}/>
                </Switch>
            </main>
        </div>
    )
}

export default App