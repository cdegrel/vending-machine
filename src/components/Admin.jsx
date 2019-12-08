import React from 'react'

import AdminProductList from '../containers/AdminProductList'
import AdminCoinList from '../containers/AdminCoinList'

const Admin = () => (
    <div className="admin">
        <AdminProductList/>
        <AdminCoinList/>
    </div>
)

export default Admin