import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import { fetchProducts } from './actions'

import './style.css'

store.dispatch(fetchProducts())

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)