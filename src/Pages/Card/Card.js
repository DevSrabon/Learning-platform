import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
const Card = () => {
    const a = useLoaderData();
    return (
			<div>
				<Container>
					<Row>
						<Col lg="3" className="d-none d-lg-block">
							<LeftSide></LeftSide>
						</Col>
						<Col lg="9">
                        <h2>{a.name}</h2>
						</Col>
					</Row>
				</Container>
			</div>
		);
};

export default Card;