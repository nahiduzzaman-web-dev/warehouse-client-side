import React from 'react';
import { useForm } from "react-hook-form";
import './AddItems.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const url = `http://localhost:5000/medicine/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })


    };

    return (
        <div className='mx-auto w-50 my-5 add-form'>
            <div className='p-5'>
                <div className="section-heading my-5">
                    <h3 className='text-center add-medicine'>ADD MEDICINE</h3>
                    <div className='d-flex justify-content-center'>
                        <span className="animate-border border-black"></span>
                    </div>
                </div>
                <div className='my-3'>
                    <h5>You login with: {user.email}</h5>
                </div>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Medicine Trade name' {...register("medicine_name", { required: true, maxLength: 50 })} />
                    <input className='mb-3' placeholder='Supplier name' {...register("supplier_name", { required: true, maxLength: 50 })} />
                    <textarea className='mb-3' placeholder='Sort description' {...register("sort_description")} />
                    <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-3' placeholder='Medicine photo url link' type="text" {...register("picture")} />
                    <input className='mb-3 w-50 mx-auto btn-submitform' placeholder='' type="submit" value="Add New Medicine" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;