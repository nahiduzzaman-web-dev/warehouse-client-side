import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './MedicineShow.css';

const MedicineShow = ({ medicine }) => {
    const { _id, medicine_name, supplier_name, price, quantity, picture, sort_description } = medicine;
    const navigate = useNavigate();

    const navigateToCheckOut = (_id) => {
        navigate(`/update/${_id}`);
    }
    return (
        <div className='col-md-4 col-sm-6 col-12'>
            <CardGroup>
                <Card className='single-card mb-5 mx-2'>
                    <Card.Img variant="top" src={picture} className='card-picture' />
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title className='medicine-name'>{medicine_name}</Card.Title>
                            <Card.Text className='supplier-name'>{supplier_name}</Card.Text>
                        </div>
                        <div className='description mt-3'>
                            <Card.Text>{sort_description}</Card.Text>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Card.Text className='quantity-container'><span className='quantity'>Quantity: </span> <span className='quantity-amount'>{quantity}</span> <span>Box</span></Card.Text>
                            <Card.Text><span className='dolar'>$ </span> <span className='price'>{price}</span></Card.Text>
                        </div>
                    </Card.Body>
                    <div className='footer-btn mb-2'>
                        <button onClick={() => navigateToCheckOut(_id)} className='update-btn'>Update</button>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default MedicineShow;