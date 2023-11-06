import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../index.css";
import './Navbar.css'; 
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    const { loginWithRedirect , isAuthenticated , logout , user} = useAuth0();

    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://ajio.newsfeedsmartapp.com/assets/title/logo.png" alt="Your Logo" />
            </div>

            <div className='nav-links'>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/products">
                    Products
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                {
                    isAuthenticated ? 

                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logout</button>

                    :  
                     
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                }
               
                
   
            </div>
            {
                    isAuthenticated && <p>
                        Hello .{user.name}
                    </p>
                }

            <div className="cart-info">
                <Link to="/cart">
                    <p className='cartcount'>Cart Count</p>
                    <i className="fa fa-shopping-cart"></i>
                    <span className="cartCount"> {items.length}</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
