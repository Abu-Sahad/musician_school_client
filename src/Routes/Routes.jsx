import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ClassSection from "../Pages/Home/ClassSection/ClassSection";
import Instructor from "../Pages/Home/Instructor/Instructor";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import MyBookCard from "../Pages/Dashboard/MyBookCard/MyBookCard";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-class",
        element: <ClassSection />,
      },
      {
        path: "all-instructor",
        element: <Instructor />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyBookCard></MyBookCard>
      }
    ]
  }
]);