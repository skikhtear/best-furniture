import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ProductDetails from '../ProductDetails/ProductDetails';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default Home;