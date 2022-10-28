import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
const Footer = () => {
    return (
			<div className='d-flex align-items-center justify-content-center'
				style={{ height: '30vh', width: '100%', backgroundColor: 'aquamarine' }}
			>
				<small>
					<FaRegCopyright className='me-1'/>
					 Srabon. All rights reserves.
				</small>
			</div>
		);
};

export default Footer;