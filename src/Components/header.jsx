import React from 'react'
import '../Sass/header.scss'

export const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <a class="navbar-brand ui-color" href="/">UI <span class="Color">Color</span></a>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">SignIn/Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
