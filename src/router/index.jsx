import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import Detail from "../Pages/Detail";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: '/detail/:id',
        element : <Detail/>
      }
    ],
  },
]);

export { router };
