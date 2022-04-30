import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Spinner animation="grow" variant="warning" size="sm" />
            <Spinner animation="grow" variant="info" size="sm" />
        </div>
    );
};

export default Loading;