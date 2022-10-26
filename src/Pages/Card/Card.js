import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Card = () => {
    const a = useLoaderData();
    return (
        <div>
            <h2>one card {a.id}</h2>
        </div>
    );
};

export default Card;