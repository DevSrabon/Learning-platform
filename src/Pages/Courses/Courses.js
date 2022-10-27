import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import LeftSide from '../LeftSide/LeftSide';
import { useLoaderData,} from 'react-router-dom';
const Courses = () => {
    const data = useLoaderData();
    console.log(data);
    return (
			<div className="container">
				<h3 className='text-warning'>Courses Categories</h3>
				<Container>
					<Row>
						<Col lg="3" className="d-none d-lg-block">
							<LeftSide></LeftSide>
						</Col>
						<Col lg="9" className="container">
							<div className="d-flex gap-4 flex-wrap justify-content-center">
								{data.map((course) => (
									<Cards key={course.id} course={course}></Cards>
								))}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
};

export default Courses;