import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Redirect from './pages/Login/Redirect';
import Chat from './pages/Chat/Chat';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/redirect', element: <Redirect /> },
      { path: '/chat', element: <Chat /> },
    ],
  },
]);

export default router;