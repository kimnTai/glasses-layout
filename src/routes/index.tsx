import Layout from "@/components/Layout";
import Blog from "@/pages/Blog";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Question from "@/pages/Question";
import Store from "@/pages/Store";
import { Navigate, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/question",
        element: <Question />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);

export default router;
