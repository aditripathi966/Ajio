import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../index.css"

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo"><img src="https://play-lh.googleusercontent.com/ODwuO86g8lbgiWbhRLclRnEstD0WAhlXYW9Me2rY2huXr7H0NYMAKUtwami7uyREN9Q" alt="" /></span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
