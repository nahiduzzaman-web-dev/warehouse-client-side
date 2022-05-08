import React from 'react';
import useMedicine from '../hooks/useMedicine';
import { MdDeleteForever } from 'react-icons/md';
import './ManageItems.css';
import { useNavigate } from 'react-router-dom';

const ManageItems = () => {
    const [medicines, setMedicines] = useMedicine();
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ???');
        if (proceed) {
            const url = `https://stark-waters-32279.herokuapp.com/medicine/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = medicines.filter(service => service._id !== id);
                    setMedicines(remaining);
                })

        }
    }
    return (
        <div className='container my-5'>
            <div className="section-heading my-5">
                <h3 className='text-center'>MANAGE MEDICINE LIST</h3>
                <div className='d-flex justify-content-center'>
                    <span className="animate-border border-black"></span>
                </div>
            </div>
            <div className='mb-5'>
                <button onClick={() => navigate('/additems')} className='add-new-items'>ADD NEW ITEMS</button>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='myItems'>
                    {
                        medicines.map(medicine => <div>

                            <div className='list-container d-none d-md-block'>
                                <div className='list'>
                                    <div className='text-center'>
                                        <h6>Name</h6>
                                        <p>{medicine.medicine_name}</p>
                                    </div>
                                    <div className='text-center'>
                                        <h6>Supplier</h6>
                                        <p>{medicine.supplier_name}</p>
                                    </div>
                                    <div className='text-center'>
                                        <h6>Quantity</h6>
                                        <p>{medicine.quantity}</p>
                                    </div>
                                    <div className='text-center'>
                                        <h6>Price</h6>
                                        <p>$ {medicine.price}</p>
                                    </div>
                                    <div><img src={medicine.picture} alt="" className='img-fluid tbl-image' /></div>
                                    <div> <span onClick={() => handleDelete(medicine._id)}> <MdDeleteForever className='delete-btn' /></span></div>
                                </div>
                            </div>
                            <div className='d-block d-md-none mobile-device-container'>
                                <div>Name: {medicine.medicine_name}</div>
                                <div>Supplier: {medicine.supplier_name}</div>
                                <div>Quantity: {medicine.quantity}</div>
                                <div>Price: $ {medicine.price}</div>
                                <div><img src={medicine.picture} alt="" className='img-fluid tbl-image' /></div>
                                <div className='my-3'> <button onClick={() => handleDelete(medicine._id)} className='delete-sm-btn'>DELETE</button></div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageItems;