import React from 'react';
import {Link} from 'react-router-dom'
const LogIn = () => {
    return (
        <div>
            <h2>THis is login</h2>
            <Link to='/register'>register</Link>
        </div>
    );
};

export default LogIn;