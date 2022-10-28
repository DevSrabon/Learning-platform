import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main/Main';
import Blog from '../../Pages/Blog/Blog';
import CardMatch from '../../Pages/CardMatch/CardMatch';
import Faq from '../../Pages/Faq/Faq';
import Courses from '../../Pages/Courses/Courses';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';

import Home from '../../Pages/Home/Home';
import LogIn from '../../Pages/LogIn/LogIn';
import CheckOut from '../../Pages/CheckOut/CheckOut';
import Registration from '../../Pages/Registration/Registration';
import PrivetRoutes from '../PrivetRoutes/PrivetRoutes';
import Error from '../../Pages/Shared/Error';

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
				loader: () =>
					fetch('https://assignment10-server-chi.vercel.app/courses'),
			},
			{
				path: '/courses/:id',
				element: <CardMatch></CardMatch>,
				loader: ({ params }) =>
					fetch(
						`https://assignment10-server-chi.vercel.app/courses/${params.id}`
					),
			},
			{
				path: '/courses/details/:id',
				element: (
					<PrivetRoutes>
						<CourseDetails></CourseDetails>
					</PrivetRoutes>
				),
				loader: ({ params }) =>
					fetch(
						`https://assignment10-server-chi.vercel.app/courses/details/${params.id}`
					),
			},
			{
				path: '/courses/details/checkout/:id',
				element: <CheckOut></CheckOut>,
				loader: ({ params }) =>
					fetch(
						`https://assignment10-server-chi.vercel.app/courses/details/checkout/${params.id}`
					),
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
			{
				path: '/faq',
				element: <Faq></Faq>,
			},
			{
				path: '*',
				element: <Error></Error>,
			},
		],
	},
]);
