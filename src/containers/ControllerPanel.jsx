import React from 'react'

import Balance from './Balance'
import CoinSelector from './CoinSelector'

const ControllerPanel = () => {
    return (
        <div className="controller-panel">
            <Balance />
            <CoinSelector />
        </div>
    )
}

export default ControllerPanel