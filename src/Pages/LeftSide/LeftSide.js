import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('https://assignment10-server-chi.vercel.app/courses')
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<div>
			<h3 className="text-warning">Courses Categories</h3>
			{categories.map((courses) => (
				<div className="mb-3" key={courses.id} courses={courses}>
					<Link
						className="text-decoration-none text-info fw-bold  fs-7 pb-3"
						to={`/courses/${courses.id}`}
					>
						{courses.name}
					</Link>
				</div>
			))}
		</div>
	);
};

export default LeftSide;
