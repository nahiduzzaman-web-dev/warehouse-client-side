import React from 'react';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Inventory from '../Inventory/Inventory';
import Testimonials from '../Testimonials/Testimonials';

const HomePage = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Company></Company>
            <Inventory></Inventory>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;