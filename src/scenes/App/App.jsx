import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Machine from '../Machine/Machine'
import Admin from '../Admin/Admin'

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