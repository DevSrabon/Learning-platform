import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
	return (
		<div className="container mb-5">
			<Accordion defaultActiveKey={['0']} alwaysOpen>
				<Accordion.Item eventKey="0">
					<Accordion.Header>1.What is cors?</Accordion.Header>
					<Accordion.Body>
						Cross-origin resource sharing (CORS) is a mechanism that allows
						restricted resources on a web page to be requested from another
						domain outside the domain from which the first resource was served.{' '}
						<br /> 1. A web page may freely embed cross-origin images,
						stylesheets, scripts, iframes, and videos. <br />
						2. Certain "cross-domain" requests, notably Ajax requests, are
						forbidden by default by the same-origin security policy. CORS
						defines a way in which a browser and server can interact to
						determine whether it is safe to allow the cross-origin request.{' '}
						<br />
						3. It allows for more freedom and functionality than purely
						same-origin requests, but is more secure than simply allowing all
						cross-origin requests.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>
						2. Why are you using firebase? What other options do you have to
						implement authentication?
					</Accordion.Header>
					<Accordion.Body>
						Firebase Authentication provides backend services, easy-to-use SDKs,
						and ready-made UI libraries to authenticate users to your app. It
						supports authentication using passwords, phone numbers, popular
						federated identity providers like Google, Facebook and Twitter, and
						more.
						<br /> <br />
						The other option for authentication are cards, retina scans, voice
						recognition, and fingerprints.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						3. How does the private route work?
					</Accordion.Header>
					<Accordion.Body>
						The react private route component renders child components (
						children ) if the user is logged in. If not logged in the user is
						redirected to the /login page with the return url passed in the
						location state property.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header>
						4. What is Node? How does Node work?
					</Accordion.Header>
					<Accordion.Body>
						Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
						engine.
						<br /> <br />
						It is a used as backend service where javascript works on the
						server-side of the application. This way javascript is used on both
						frontend and backend. Node. js runs on chrome v8 engine which
						converts javascript code into machine code, it is highly scalable,
						lightweight, fast, and data-intensive.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default Blog;
