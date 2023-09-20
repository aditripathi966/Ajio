import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome to the Ajio Store <img src="https://assets.ajio.com/static/assets/marketing/Oct-BBS-Logo-apps.png" alt="" /></h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
