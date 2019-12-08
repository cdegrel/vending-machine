import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className="header">
        <Link to="/">
            <h1>Vending Machine</h1>
        </Link>
        <Link className="btn btn-danger" to="/admin">Admin</Link>
    </header>
)

export default Header