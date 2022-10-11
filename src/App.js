import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ],
    },
    
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
