import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin, user, setUser }) => {

    const [menu, setMenu] = useState("Home");
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='navbar'>
            
            <Link to="/">
                <img src={assets.logo} alt="Tomato Logo" className="logo" />
            </Link>

            <ul className="navbar-menu">
                <li>
                    <Link 
                        to='/' 
                        onClick={() => setMenu("Home")} 
                        className={menu === "Home" ? "active" : ""}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <a 
                        href='#explore-menu'
                        onClick={() => setMenu("Menu")}
                        className={menu === "Menu" ? "active" : ""}
                    >
                        Menu
                    </a>
                </li>

                <li>
                    <a 
                        href='#app-download'
                        onClick={() => setMenu("Mobile app")}
                        className={menu === "Mobile app" ? "active" : ""}
                    >
                        Mobile app
                    </a>
                </li>

                <li>
                    <a 
                        href='#footer'
                        onClick={() => setMenu("Contact us")}
                        className={menu === "Contact us" ? "active" : ""}
                    >
                        Contact us
                    </a>
                </li>
            </ul>

            <div className="navbar-right">

                <Link to='/'><img src={assets.search_icon} alt="Search Icon" /></Link>

                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

                {user ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <p style={{ fontWeight: "bold" }}>
                            👋 Welcome {user}
                        </p>
                        <button
                            onClick={() => {
                                localStorage.removeItem("user");
                                setUser(null);
                            }}
                            style={{
                                padding: "6px 10px",
                                backgroundColor: "#ff4d4d",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button onClick={() => setShowLogin(true)}>
                        Sign In
                    </button>
                )}

            </div>
        </div>
    );
};

export default Navbar;
