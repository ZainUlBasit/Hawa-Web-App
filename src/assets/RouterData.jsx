import About from "../components/pages/About";
import Candidates from "../components/pages/Candidates";
import Contacts from "../components/pages/Contacts";
import Employers from "../components/pages/Employers";
import Home from "../components/pages/Home";
import Jobs from "../components/pages/Jobs";
import NewsInsights from "../components/pages/NewsInsights";
import Register from "../components/pages/Register";

export const RouterData = [
  { path: "/", element: <Home />, errorElement: <h4>404 Not Found!</h4> },
  {
    path: "/about-us",
    element: <About />,
    errorElement: <h4>404 Not Found!</h4>,
  },
  {
    path: "/candidates",
    element: <Candidates />,
    errorElement: <h4>404 Not Found!</h4>,
  },
  {
    path: "/employers",
    element: <Employers />,
    errorElement: <h4>404 Not Found!</h4>,
  },
  {
    path: "/jobs",
    element: <Jobs />,
    errorElement: <h4>404 Not Found!</h4>,
  },
  {
    path: "/news-insights",
    element: <NewsInsights />,
    errorElement: <h4>404 Not Found!</h4>,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <h4>404 Not Found!</h4>,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <h4>404 Not Found!</h4>,
  },
];
