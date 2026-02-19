import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>
                  "Your favorite food, just a tap away.
                  Order now & enjoy the feast!"
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/delivery">Delivery</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>
  <a href="tel:+917977641125">
    +91-797-764-1125
  </a>
</li>

<li>
  <a href="mailto:priyanshubipin2006@gmail.com">
    priyanshubipin2006@gmail.com
  </a>
</li>
                </ul>
            </div>

        </div>

        <hr />

        <p className="footer-copyright">
          Copyright 2025 © Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer
