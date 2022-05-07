import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='my-5 d-flex justify-content-center'>
            <div>
                <Spinner animation="grow" variant="warning" size="sm" />
                <Spinner animation="grow" variant="info" size="sm" />
            </div>
        </div>
    );
};

export default Loading;