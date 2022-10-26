import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
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
								src="/logo.svg"
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt=""
							/>
							<Link to="/">Programming for Future</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ms-auto">
								<>
									<Link className="me-3 text-decoration-none" to="/courses">
										Courses
									</Link>
								</>
								<>
									<Link className="me-3 text-decoration-none" to="/blog">
										Blog
									</Link>
								</>
								<>
									<Link className="me-3 text-decoration-none" to="/login">
										Login
									</Link>
								</>
							</Nav>
							<Nav></Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
};

export default Header;