import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";


const myCreatedRouter = createBrowserRouter([
  {
    path : "/",
    element : <MainLayout></MainLayout>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader : () => fetch('/course.json')
      },
      {
        path : "/donation",
        element : <Donation></Donation>
      },
      {
        path : "/statistics",
        element : <Statistics></Statistics>
      }
    ]
  }
])

export default myCreatedRouter;