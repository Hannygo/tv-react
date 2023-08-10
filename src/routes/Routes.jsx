import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../component/Root";
import Home from "../Pages/Home";
import TvDetail from "../Pages/TvDetail";
import Search from "../pages/Search";
import TvShows from "../pages/TvShows";
import Error from "../component/Error";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children:[
        {
          path:'/',
          element: <Home />,
        },
        {
          path: 'tvshows/:id',
          element: <TvDetail />,
        },
        {
          path:'Search',
          element: <Search />,
        },
        {
          path:'/tvshows',
          element : <TvShows />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
  ])
return (
  <>
   <RouterProvider router={router} />
  </>
)
 
}