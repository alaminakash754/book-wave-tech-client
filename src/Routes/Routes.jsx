import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import Signup from "../components/Signup/Signup";
import Error from "../Pages/error/Error";
import AddBook from "../Pages/AddBook/AddBook";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/book')
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
          path: '/addBook',
          element: <AddBook></AddBook>
        }
        
      ]
    },
  ]);
   
export default router;