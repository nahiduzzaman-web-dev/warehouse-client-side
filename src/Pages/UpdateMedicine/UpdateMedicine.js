import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateMedicine.css';
import { FcRegisteredTrademark } from 'react-icons/fc';
import { TiArrowForward } from 'react-icons/ti';

const UpdateMedicine = () => {
    let { updateId } = useParams();
    const [medicine, setMedicine] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://stark-waters-32279.herokuapp.com/medicine/${updateId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMedicine(data));
    }, []);

    const handleDelivery = () => {
        fetch(`https://stark-waters-32279.herokuapp.com/medicine/decrease/${updateId}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(json => {
                setMedicine({ ...medicine, quantity: medicine.quantity - 1 })
            });

    }

    const handleRestockButton = async (e) => {
        e.preventDefault();
        const value = e.target.restock.value;

        fetch(`https://stark-waters-32279.herokuapp.com/medicine/increase/${updateId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ quantity: value }),
        })
            .then(res => res.json())
            .then(json => {
                setMedicine({ ...medicine, quantity: parseInt(medicine.quantity) + parseInt(value) })
            })
    }

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
                                    <img src={medicine.picture} alt="" className='img-fluid' />
                                </div>

                                <Card.Text className='update-paragraph'>
                                    {medicine.sort_description}
                                </Card.Text>
                                <div>
                                    <div>
                                        <p className='fs-5'>Price: $ {medicine.price}</p>

                                    </div>
                                </div>
                                <div className="update-quantity-container">
                                    <p>
                                        QUANTITY: <span className='update-box mx-2'>{medicine.quantity}</span> <span className='box'>Box</span>
                                    </p>
                                </div>
                            </Card.Body>

                            <div className='d-flex justify-content-center flex-column flex-md-row'>
                                <div className='d-block my-3 mx-4'>
                                    <button onClick={() => navigate('/manageitems')} className='manga-btn'>Manage Inventories <TiArrowForward /></button>
                                </div>
                                <div className='d-block my-3'>
                                    <button onClick={handleDelivery} className='delivery-btn'>Delivery</button>
                                </div>
                            </div>

                            <div className='my-5'>
                                <h5>Restock: {medicine.medicine_name} Medicine</h5>
                                <form onSubmit={handleRestockButton}>
                                    <input type="number" name="restock" id="" />
                                    <input type="submit" value="Restock" className='restock-btn' />
                                </form>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMedicine;