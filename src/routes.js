import { Navigate } from 'react-router-dom';
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';

const routes = (user) => [
  {
    path: '/',
    element: user ? <Dashboard /> : <Navigate to="/login" />,
  },
  {
    path: '/create',
    element: user ? <Create /> : <Navigate to="/login" />,
  },
  {
    path: '//projects/:id',
    element: user ? <Project /> : <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: !user ? <Login /> : <Navigate to="/" />,
  },
  {
    path: '/signup',
    element: !user ? <Signup /> : <Navigate to="/" />,
  },
];

export default routes;