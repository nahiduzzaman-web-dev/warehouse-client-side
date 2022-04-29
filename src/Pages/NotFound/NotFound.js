import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404-pages.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-12">
                    <div>
                        <div className='d-flex justify-content-center notfound-pic'>
                            <img src={notFound} alt="" className='img-fluid' />
                        </div>

                        <div className='d-flex justify-content-center'>
                            <div className='text-center'>
                                <h1 className='mt-5'>Sorry!</h1>
                                <p>
                                    Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
                                </p>
                                <Link to='/'><button className='go mb-5'>You can go now!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;