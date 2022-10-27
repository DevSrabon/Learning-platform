import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Tooltip } from 'react-bootstrap';
import LeftSide from '../../LeftSide/LeftSide';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.error(error));
	};
	return (
		<div>
			<Navbar
				collapseOnSelect
				className="mb-4"
				expand="lg"
				bg="light"
				variant="light"
			>
				<Container>
					<Navbar.Brand>
						<img
							src="https://static.vecteezy.com/system/resources/previews/004/908/013/original/coding-logo-design-template-free-vector.jpg"
							width="50"
							height="50"
							className="d-inline-block align-top"
							alt=""
						/>
						<Link
							className="ms-2 text-decoration-none text-info fw-bold"
							to="/"
						>
							Programming School
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<>
								<Link
									className="me-3 text-decoration-none text-info fw-bold"
									to="/courses"
								>
									Courses
								</Link>
							</>
							<>
								<Link
									className="me-3 text-decoration-none text-info fw-bold"
									to="/blog"
								>
									Blog
								</Link>
							</>

							<div className="d-lg-none mt-3">
								<LeftSide></LeftSide>
							</div>
						</Nav>
						<Nav>
							<>
								{user?.uid ? (
									<>
										<Button
											variant="light"
											className="text-info fw-bold"
											onClick={handleLogOut}
										>
											Log Out
										</Button>
									</>
								) : (
									<>
										<Link
											className="me-3 text-decoration-none text-info fw-bold"
											to="/login"
										>
											Login
										</Link>
									</>
								)}
							</>
							<Link className="ms-3 text-decoration-none" to="/profile">
								{user?.photoURL ? (
									<OverlayTrigger
										placement="bottom"
										overlay={
											<Tooltip id="button-tooltip-2">
												{user.displayName}
											</Tooltip>
										}
									>
										{({ ref, ...triggerHandler }) => (
											<Button
												variant="light"
												{...triggerHandler}
												className="d-inline-flex align-items-center"
											>
												<Image
													ref={ref}
													tool
													style={{ height: '40px' }}
													src={user.photoURL}
													roundedCircle
												></Image>
											</Button>
										)}
									</OverlayTrigger>
								) : (
									<FaUser />
								)}
							</Link>
						</Nav>
						<Nav></Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
