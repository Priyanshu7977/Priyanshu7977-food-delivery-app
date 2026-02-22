import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { NavLink, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin, user, setUser }) => {

    const { getTotalCartAmount } = useContext(StoreContext);
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("");

    const handleScrollToMenu = () => {
        const section = document.getElementById("explore-menu");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setActiveMenu("menu");
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <div className='navbar'>

            {/* Logo */}
            <NavLink to="/home">
                <img src={assets.logo} alt="Tomato Logo" className="logo" />
            </NavLink>

            <ul className="navbar-menu">

                {/* Home */}
                <li>
                    <NavLink
                        to="/home"
                        end
                        className={({ isActive }) =>
                            isActive && activeMenu !== "menu" ? "active" : ""
                        }
                        onClick={() => setActiveMenu("")}
                    >
                        Home
                    </NavLink>
                </li>

                {/* Menu */}
                <li>
                    <span
                        onClick={handleScrollToMenu}
                        className={activeMenu === "menu" ? "active" : ""}
                    >
                        Menu
                    </span>
                </li>

                {/* Contact */}
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                        onClick={() => setActiveMenu("")}
                    >
                        Contact
                    </NavLink>
                </li>

            </ul>

            {/* Right Section */}
            <div className="navbar-right">

                <div className="cart-icon">
                    <NavLink to='/cart'>
                        <img src={assets.basket_icon} alt="Cart" />
                    </NavLink>
                    {getTotalCartAmount() !== 0 && <div className="cart-dot"></div>}
                </div>

                {user ? (
                    <div className="navbar-user">
                        <span className="welcome-text">👋 {user}</span>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <button 
                        className="signin-btn"
                        onClick={() => setShowLogin(true)}
                    >
                        Sign In
                    </button>
                )}

            </div>
        </div>
    );
};

export default Navbar;