import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Component/Root";
import Home from "../Pages/Home";
import TvDetail from "../Pages/TvDetail";
import Search from "../pages/Search";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
          path:'/',
          element: <Home />
        },
        {
          path: 'tvshows/:id',
          element: <TvDetail />
        },
        {
          path:'Search',
          element: <Search/>
        }
      ],
    },
  ])
return (
  <>
   <RouterProvider router={router} />
  </>
)
 
}