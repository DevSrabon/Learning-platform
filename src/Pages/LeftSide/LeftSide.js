import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
					.then((res) => res.json())
					.then((data) => setCategories(data));
    }, [])
    return (
			<div>
				<h4>All Categories: {categories.length}</h4>
				<div>
					{categories.map((Courses) => (
						<p key={Courses.id}>
							<Link to={`/courses/${Courses.id}`}>{Courses.name}</Link>
						</p>
					))}
				</div>
			</div>
		);
};

export default LeftSide;