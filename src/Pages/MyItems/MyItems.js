import React from 'react';
import useMedicine from '../hooks/useMedicine';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import './MYItems.css';

const MyItems = () => {
    const [medicines, setMedicines] = useMedicine();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ???');
        if (proceed) {
            const url = `http://localhost:5000/medicine/${id}`;
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
            <div className='d-flex justify-content-center'>
                <div className='myItems'>
                    {
                        medicines.map(medicine => <div key={medicine._id}>
                            <h5><span className='supplier-myitems mx-2'>{medicine.supplier_name}: </span>
                                <span>{medicine.medicine_name}</span>
                                <span onClick={() => handleDelete(medicine._id)}> <RiDeleteBack2Fill className='delete-btn' /></span></h5>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;