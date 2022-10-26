import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import LeftSide from '../LeftSide/LeftSide';
import { useLoaderData, Outlet } from 'react-router-dom';
const Courses = () => {
    const data = useLoaderData();
    console.log(data);
    return (
			<div>
				<h2>THis is courses</h2>
				<Container>
					<Row>
						<Col lg="2" className="d-none d-lg-block">
							<LeftSide></LeftSide>
                        <Outlet></Outlet>
						</Col>
						<Col lg="7">
                        {
                            data.map(course => <Cards key={course.id} course={course}></Cards>)
                        }
						</Col>
						
					</Row>
				</Container>
			</div>
		);
};

export default Courses;