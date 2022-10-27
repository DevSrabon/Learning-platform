import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../../Pages/Blog/Blog";
import CardMatch from "../../Pages/CardMatch/CardMatch";

import Courses from "../../Pages/Courses/Courses";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";


import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Registration from "../../Pages/Registration/Registration";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/courses',
				element: <Courses></Courses>,
				loader: () => fetch('http://localhost:5000/courses'),
			},
			{
				path: '/courses/:id',
				element: <CardMatch></CardMatch>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/courses/${params.id}`),
			},
			{
				path: '/courses/details/:id',
				element: (
					<PrivetRoutes>
						<CourseDetails></CourseDetails>
					</PrivetRoutes>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/courses/details/${params.id}`),
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
			{
				path: '/login',
				element: <LogIn></LogIn>,
			},
			{
				path: '/register',
				element: <Registration></Registration>,
			},
		],
	},
]);