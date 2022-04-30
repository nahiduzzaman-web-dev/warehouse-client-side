import React from 'react';
import useMedicine from '../hooks/useMedicine';
import MedicineShow from '../MedicineShow/MedicineShow';


const Inventory = () => {
    const [medicine, setMedicine] = useMedicine();
    return (
        <div className='container mt-5'>
            <div class="section-heading my-5">
                <h3 className='text-center'>MEDICINE LIST</h3>
                <div className='d-flex justify-content-center'>
                    <span class="animate-border border-black"></span>
                </div>
            </div>
            <div className='row'>
                {
                    medicine.map(medicine => <MedicineShow
                        key={medicine._id}
                        medicine={medicine}
                    ></MedicineShow>)
                }
            </div>
        </div>
    );
};

export default Inventory;