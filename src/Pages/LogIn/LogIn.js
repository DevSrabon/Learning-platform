import toast from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const LogIn = () => {
	const [error, setError] = useState('');
	const { signIn, setLoading, signInWithGoogle, signInWithGithub } =
		useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		const from = location.state?.from?.pathname || '/';

		signIn(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				form.reset();
				setError('');
				if (user.emailVerified) {
					navigate(from, { replace: true });
				} else {
					toast.error('Your email is not verified. Please Verify!!');
				}
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then((result) => console.log(result.user))
			.catch((er) => console.error(er));
	};
	const handleGithub = () => {
		signInWithGithub()
			.then((result) => console.log(result.user))
			.catch((er) => console.error(er));
	};

	return (
		<div
			className="container my-5 bg-info p-5 rounded text-white"
			style={{ width: '30%' }}
		>
			<Form onSubmit={handleSubmit}>
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
				<Form.Text className="text-danger">{error}</Form.Text>
			</Form>
			<>
				New here? please <Link to="/register">Register</Link> or
			</>
			<br />
			<div className="mt-3">
				<Button onClick={handleGoogleSignIn} className="btn-success">
					Google Sign in
				</Button>
				<Button onClick={handleGithub} className="btn-success ms-2">
					Github Sign in
				</Button>
			</div>
		</div>
	);
};

export default LogIn;
