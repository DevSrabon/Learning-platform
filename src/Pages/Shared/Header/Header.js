import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import LeftSide from '../../LeftSide/LeftSide';
const Header = () => {
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
							<Link className="ms-2 text-decoration-none text-info fw-bold" to="/">
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
								<>
									<Link
										className="me-3 text-decoration-none text-info fw-bold"
										to="/login"
									>
										Login
									</Link>
								</>
								<div className="d-lg-none mt-3">
									<LeftSide></LeftSide>
								</div>
							</Nav>
							<Nav></Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
};

export default Header;