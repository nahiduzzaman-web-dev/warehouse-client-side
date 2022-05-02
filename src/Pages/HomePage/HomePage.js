import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import useMedicine from '../hooks/useMedicine';
import MedicineShow from '../MedicineShow/MedicineShow';
import Testimonials from '../Testimonials/Testimonials';
import './HomePage.css';

const HomePage = () => {
    const [medicines, setMedicines] = useMedicine();
    const navigate = useNavigate();

    return (
        <div className='container'>
            <Banner></Banner>
            <Company></Company>
            <div className='container'>
                <div className='row'>
                    {
                        medicines.slice(0, 6).map(medicine => <MedicineShow
                            key={medicine._id}
                            medicine={medicine}
                        ></MedicineShow>)
                    }
                </div>
                <div className='row'>
                    <div className='col-md-12 col-12'>
                        <div className='m-inventory mb-5'>
                            <button onClick={() => navigate('manageitems')} className='manage-inventory-btn'>Manage Inventories</button>
                        </div>
                    </div>

                </div>
            </div>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;