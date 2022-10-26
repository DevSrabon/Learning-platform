import React from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const LogIn = () => {
    return (
			<div className="container">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							required
							placeholder="Enter email"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							required
							placeholder="Password"
						/>
					</Form.Group>
					<Button variant="success" type="submit">
						Submit
					</Button>
				</Form>
				<>
					New here? please <Link to="/register">Register</Link>
				</>
			</div>
		);
};

export default LogIn;