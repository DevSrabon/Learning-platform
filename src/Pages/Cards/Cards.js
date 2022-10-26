import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cards = ({ course }) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant="top"
				style={{ width: '100%', height: '190px' }}
				src={course.img}
			/>
			<Card.Body>
				<Card.Title>{course.name}</Card.Title>
				<Card.Text>
					<b>Short Intro: </b> {course.short}
				</Card.Text>
			</Card.Body>
			<Card.Footer className='p-0'>
				<Link to={`/courses/details${course.id}`}>
					<Button variant="success" className="w-100">
						Details
					</Button>
				</Link>
			</Card.Footer>
		</Card>
	);
};

export default Cards;
