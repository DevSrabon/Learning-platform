import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../../Pages/Blog/Blog";

import Card from "../../Pages/Card/Card";
import Courses from "../../Pages/Courses/Courses";


import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Registration from "../../Pages/Registration/Registration";

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
				element:<Card></Card>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/courses/${params.id}`),
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