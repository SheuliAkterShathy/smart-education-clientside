import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CourseDetails from './components/CourseDetails/CourseDetails';

import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
         path:'/',
         element:<Home></Home>
        },
        {
          path:'/courses',
          element:<Courses></Courses>,
          loader: () => fetch('http://localhost:5000/courses')
        },
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
