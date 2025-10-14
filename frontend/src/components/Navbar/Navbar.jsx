import React, { useState } from 'react'
import './Navbar.css'

import search_icon from '../../Images/search_icon.png'
import { assets } from '../../Images/assets.js'



function Navbar() {
        const [menu, setMenu] = useState("mobile")
        return (
                <div className='navbar'>
                        <img src={assets.logo} alt="" className='logo' />

                        <ul className="nave-menu">
                                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
                                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app </li>
                                <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>contact</li>
                        </ul>

                        <div className="navbar-right">
                                <img src={search_icon} alt="" />
                                <div className="nav-search-icon">
                                        <img src={assets.basket_icon} alt="" />
                                        <div className="dot"></div>

                                </div>
                                <button>Sing In</button>
                        </div>
                </div>
        )
}

export default Navbar
