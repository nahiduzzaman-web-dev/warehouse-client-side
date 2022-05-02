import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './UpdateMedicine.css';
import { FcRegisteredTrademark } from 'react-icons/fc';

const UpdateMedicine = () => {
    let { updateId } = useParams();
    const [medicine, setMedicine] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/medicine/${updateId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMedicine(data));
    }, [updateId]);
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-12 col-12">
                    <div className='update-card'>
                        <Card className="text-center my-5">
                            <Card.Header className='update-name'>
                                <h4>
                                    {medicine.medicine_name} <span className='supply'> {medicine.supplier_name}</span> <span className='register-company'><FcRegisteredTrademark /></span> <br />
                                    <span className='medicine-id'>(ID: {medicine._id})</span>
                                </h4>
                            </Card.Header>
                            <Card.Body>
                                <div className='update-medicine-image my-3'>
                                    <img src={medicine.picture} alt="" />
                                </div>

                                <Card.Text className='update-paragraph'>
                                    {medicine.sort_description}
                                </Card.Text>
                                <div>
                                    <div>
                                        <p className='fs-5'>Price: $ {medicine.price}</p>

                                    </div>
                                </div>
                            </Card.Body>
                            <div className="update-quantity-container">
                                <p>
                                    <span>QUANTITY:</span> <span className='update-box mx-3'>{medicine.quantity}</span> <span className='box'>Box</span>
                                </p>
                            </div>
                            <div className='d-block my-3'>
                                <button className='delivery-btn'>Delivery</button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMedicine;