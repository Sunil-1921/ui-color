import React from 'react'
import '../Sass/header.scss'
import logo from './Images/favicon2.png'

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <img className='logo' src={logo} alt="logo" />
                        <a className="navbar-brand ui-color" href="https://sunil-1921.github.io/ui-color/">UI <span className="Color">Color</span></a>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="https://sunil-1921.github.io/ui-color/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://sunil-1921.github.io/ui-color/">Contact</a>
                        </li>
                    </ul>
                    {/* <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://sunil-1921.github.io/ui-color/">SignIn/Up</a>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </>
    )
}
