import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'
import App from './scenes/App/App'
import { fetchCoins, fetchProducts } from './actions'

import './style.css'

store.dispatch(fetchProducts())
store.dispatch(fetchCoins())

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.querySelector('#root')
)