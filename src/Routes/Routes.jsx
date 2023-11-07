import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import Signup from "../components/Signup/Signup";
import Error from "../Pages/error/Error";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import UpdateBook from "../components/UpdateBook/UpdateBook";
import PrivateRoute from "./PrivateRoute";
import BooksDetails from "../components/BooksDetails/BooksDetails";


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
          path:'/details/:id',
          element: <BooksDetails></BooksDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
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
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path: '/allBooks',
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/userBook')
        },
        {
          path: '/updateBook/:id',
          element: <UpdateBook></UpdateBook>,
          loader: ({params}) => fetch(`http://localhost:5000/userBook/${params.id}`)
        }
        
      ]
    },
  ]);
   
export default router;