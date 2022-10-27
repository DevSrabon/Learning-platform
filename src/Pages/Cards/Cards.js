import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cards = ({ course }) => {
    const { id, img, name, price, intro, review, duration } = course;
	return (
		<Card className='shadow-lg mb-4' style={{ width: '18rem' }}>
			<Card.Img
				variant="top"
				style={{ width: '100%', height: '190px' }}
				src={img}
			/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					{intro.length > 100 ? (
						<>
							{intro.slice(0, 100) + '.....'}
							<Link to={`/courses/${id}`}>See More</Link>
						</>
					) : (
						<>{intro}</>
					)}
				</Card.Text>
				<Card.Text className="d-flex justify-content-between">
					<small>Duration: {duration}</small>
					<small>Review: {review}k</small>
				</Card.Text>
				<Card.Text className="">
					<div className="fs-5">Price: {price}</div>
				</Card.Text>
			</Card.Body>
			<Card.Footer className="p-0 outlet-none">
				<Link to={`/courses/${id}`}>
					<Button variant="success" className="w-100">
						Details
					</Button>
				</Link>
			</Card.Footer>
		</Card>
	);
};

export default Cards;
