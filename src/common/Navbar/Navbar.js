import React from 'react'
import './navbar.css'

export default function Navbar({ title }) {

    return (
        <div className="navbar">
            <div className="navbar-title">
                { title }
            </div>
        </div>
    )
}
