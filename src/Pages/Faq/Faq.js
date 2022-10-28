import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
			<div className="container mb-5">
				<Accordion defaultActiveKey={['0']} alwaysOpen>
					<Accordion.Item eventKey="0">
						<Accordion.Header>
							How can we get the course access?
						</Accordion.Header>
						<Accordion.Body>
							By purchasing premium you can get access to our course. For
							getting access you have to visit our website. Then pay the amount
							for your desired course. After your successful payment, you will
							get access.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							How does this course's support work?
						</Accordion.Header>
						<Accordion.Body>
							Well. We provide support to our students with their problems. Our
							instructors are always open for support.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Is this course access lifetime?</Accordion.Header>
						<Accordion.Body>
							Yes. Our content access is life time.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>How will the course work?</Accordion.Header>
						<Accordion.Body>
							The course will be based on module releases and daily tasks.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		);
};

export default Faq;