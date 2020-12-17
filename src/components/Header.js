import React from 'react'
import points from '../assets/points.png';

function Header() {
    return (
        <div className="header">
                <h3>Ahmed-El-Gout</h3>
                <div className="header-menu">
                    <ul>
                        <li className="menu__active">About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                    <button  type="text" >Get started</button>
                </div>
                <img src={points} />
        </div>
    )
}

export default Header
