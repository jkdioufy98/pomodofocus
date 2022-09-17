import React from 'react'
import Button from '../Button/Button'
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
                <Button style={navbarButtonStyle} value="Report" />
                <Button style={navbarButtonStyle} value="Setting" />
                <Button style={navbarButtonStyle} value="Login" />
            </div>

        </nav>
    </header>
)
}
