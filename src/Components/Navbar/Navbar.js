import React from 'react'
import './Navbar.css'

export const Navbar = () => {

    const navbarButtonStyle = {

    }


  return (
    <header className='Navbar'>
        <nav className='nav-panel'>
            <div className="logo">
                <h1>Pomofocus</h1>
            </div>
            <div className="btn-container">
                <input type="button" value='Report' />
                <input type="button" value='Setting' />
                <input type="button" value='Login' />
            </div>

        </nav>
    </header>
)
}
