import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, Link } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardMatch = () => {

    const detail = useLoaderData();
	console.log(detail);
    return (
			<div>
				<Container>
					<Row>
						<Col lg="3" className="d-none d-lg-block">
							<LeftSide></LeftSide>
						</Col>
						<Col lg="9">
							<Card className='shadow-lg' style={{ width: '20rem' }}>
								<Card.Img
									variant="top"
									style={{ width: '100%', height: '190px' }}
									src={detail.img}
								/>
								<Card.Body>
									<Card.Title>{detail.name}</Card.Title>
									<Card.Text>
										<b>Short Intro: </b> {detail.intro}
									</Card.Text>
								</Card.Body>
								<Button variant="success" className="w-100">
									Download PDF
								</Button>
								<Button variant="success" className="w-100 mt-1">
									Add to cart
								</Button>
								<Card.Footer className="p-0 outlet-none mt-1">
									<Link to={`/courses/details/${detail.id}`}>
										<Button variant="success" className="w-100">
											Unlock Premium Access
										</Button>
									</Link>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
};


export default CardMatch;