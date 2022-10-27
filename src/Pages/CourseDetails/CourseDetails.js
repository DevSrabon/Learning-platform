import React from 'react';
import {useLoaderData} from 'react-router-dom'
const CourseDetails = () => {
    const details = useLoaderData();
    const { id, img, name, price, intro, variable, loop, array ,func,objects, subtitle_1, subtitle_2, subtitle_3, subtitle_4, subtitle_5, } = details;
    
    console.log(variable.title_3, );
    
    return (
			<div className="container">
				<div>
					<div>
						<h2 className="text-info">{name} Course</h2>
						<p>
							<span className="fw-bold">Introduction:</span> {intro}
						</p>
						<div className="bg-info p-4 rounded">
							<h3 className="text-secondary mt-4">{subtitle_1}:</h3>
							<h4 className="mt-4 text-center text-success">
								{variable.title_1}
							</h4>
							<p>{variable.details_1}</p>
							<h4 className="mt-4 text-center text-success">
								{variable.title_2}
							</h4>
							<p>{variable.details_2}</p>
							<h4 className="mt-4 text-center text-success">
								{variable.title_3}
							</h4>
							<p>{variable.details_3}</p>
						</div>
						<div className="bg-info p-4 rounded mt-4">
							<h3 className="text-secondary mt-4">{subtitle_2}:</h3>
							<h4 className="mt-4 text-center text-success">{loop.title_1}</h4>
							<p>{loop.details_1}</p>
							<h4 className="mt-4 text-center text-success">{loop.title_2}</h4>
							<p>{loop.details_2}</p>
							<h4 className="mt-4 text-center text-success">{loop.title_3}</h4>
							<p>{loop.details_3}</p>
						</div>
						<div className="bg-info p-4 rounded mt-4">
							<h3 className="text-secondary mt-4">{subtitle_3}:</h3>
							<h4 className="mt-4 text-center text-success">{array.title_1}</h4>
							<p>{array.details_1}</p>
							<h4 className="mt-4 text-center text-success">{array.title_2}</h4>
							<p>{array.details_2}</p>
							<h4 className="mt-4 text-center text-success">{array.title_3}</h4>
							<p>{array.details_3}</p>
						</div>
						<div className="bg-info p-4 rounded mt-4">
							<h3 className="text-secondary mt-4">{subtitle_4}:</h3>
							<h4 className="mt-4 text-center text-success">{func.title_1}</h4>
							<p>{func.details_1}</p>
							<h4 className="mt-4 text-center text-success">{func.title_2}</h4>
							<p>{func.details_2}</p>
							<h4 className="mt-4 text-center text-success">{func.title_3}</h4>
							<p>{func.details_3}</p>
						</div>
						<div className="bg-info p-4 rounded my-4">
							<h3 className="text-secondary mt-4">{subtitle_5}:</h3>
							<h4 className="mt-4 text-center text-success">{objects.title_1}</h4>
							<p>{objects.details_1}</p>
							<h4 className="mt-4 text-center text-success">{objects.title_2}</h4>
							<p>{objects.details_2}</p>
							<h4 className="mt-4 text-center text-success">{objects.title_3}</h4>
							<p>{objects.details_3}</p>
						</div>
					</div>
				</div>
			</div>
		);
};

export default CourseDetails;