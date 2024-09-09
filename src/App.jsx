import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import Home from "./Pages/Home";
import About from "./Pages/About";
import Movie from "./Pages/Movie";
import ErrorPage from "./Pages/ErrorPage";
// import Nav from "./Pages/Nav";
// import Footer from './Pages/Footer';
import Applayout from './Layout/Applayout';
import { getApiData } from './API/GetApiData';
import MovieDetails from './UI/MovieDetails';
import { getMovieDetails } from "./API/GetMovieDetails";
import Contact from './UI/Contact';
import { contactData  } from "./UI/Contact";
import Home from './Layout/Home';
import MovieDetailsInside from './UI/MovieDetailsInside';
import { getMovieDetailsInside } from "./API/GetMovieDetailsInside";
const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement:<ErrorPage/>,
      children:[{
        path: "/About",
        element: <About />,
      },
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/Movie",
        element: <Movie />,
        loader:getApiData, //fetching api without useState [pass it to movie.jsx comp.]
      },
      {
        path: "/Movie/:movieID", //dynamic routing
        element: <MovieDetails/>,
        loader:getMovieDetails,
      },
     {
  path: "/Movie/:movieID/details",
  element: <MovieDetailsInside />,
  loader: getMovieDetailsInside,
},

      {
        path: "/contact",
        element: <Contact />,
        action: contactData, // Attach contact form handler here //form handling
      },
    ]
    },
    
  ]);
  return (
  <>
  <RouterProvider router={Router} />
  </>
);
};

export default App;
