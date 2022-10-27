import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import CheckOutPage from "./components/CheckOutPage/CheckOutPage";
import CourseDetails from "./components/CourseDetails/CourseDetails";

import Courses from "./components/Courses/Courses";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Faq from "./components/Faq/Faq";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Main from "./layouts/Main";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: () => fetch("http://localhost:5000/courses"),
        },
        {
          path: "/courses/:id",
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/courses/${params.id}`),
        },
        {
          path: "/checkouts/:id",
          element: (
            <PrivateRoutes>
              <CheckOutPage></CheckOutPage>
            </PrivateRoutes>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/courses/${params.id}`),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
