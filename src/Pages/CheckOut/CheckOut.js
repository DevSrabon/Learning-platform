import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const check = useLoaderData();
    return (
        <div className='d-flex align-items-center justify-content-center' style={{height:'70vh'}}>
            <h2>Successfully purchase { check.name} Course</h2>
        </div>
    );
};

export default CheckOut;