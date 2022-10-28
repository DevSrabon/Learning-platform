import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Registration = () => {
	const [error, setError] = useState('');
	const { createUser, updateUserProfile, verifyEmail } =
		useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photoURL, email, password);

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				setError('');
				handleUpdateUserProfile(name, photoURL);
				handleEmailVerification();
				toast.success('Please verify your email address');
			})
			.catch((e) => {
				console.error(e);
				setError(e.message);
			});
	};

	const handleUpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch((error) => console.error(error));
	};

	const handleEmailVerification = () => {
		verifyEmail()
			.then(() => {})
			.catch((error) => console.error(error));
	};
	return (
		<div>
			<div
				className="container my-5 bg-info p-5 rounded text-white"
				style={{ width: '400px' }}
			>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Your name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							required
							placeholder="Enter your name"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Photo URL</Form.Label>
						<Form.Control name="photoURL" type="text" placeholder="Photo URL" />
					</Form.Group>
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
					<Form.Text className="text-warning">{error}</Form.Text>
					<Link to="/login">
						<Button variant="success" type="submit">
							Submit
						</Button>
					</Link>
				</Form>
				<>
					Already register? please <Link to="/login">Login</Link>
				</>
			</div>
		</div>
	);
};

export default Registration;
