import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";

import AuthLogin from "../pages/Auth/AuthLogin";
import AuthSignup from "../pages/Auth/AuthSignup";
import Home from "../pages/Home/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <AuthLogin />,
      },
      {
        path: "/signup",
        element: <AuthSignup />,
      },
    ],
  },
]);

export default appRouter;
