import React from 'react';
import Button from 'react-bootstrap/Button';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
			<div className="body d-flex flex-column text-white align-items-center justify-content-center">
				<h2>Welcome to Programming School</h2>
				<h6>Anyone can learn Programming Language from Here!</h6>
				<Link to="/courses">
					<Button variant="outline-secondary">Get Started</Button>
				</Link>
			</div>
		);
};

export default Home;