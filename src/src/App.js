import Home from "./components/Home";
import JobDetails from "./components/Job-Details/JobDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddJob from "./components/AddJob";
import SignIn from "./components/SignIn";
import SignUp from "./components/signup";
import Hero from "./components/FrontPage/Hero";
import CompanyDash from "./components/CompanyDash/CompanyDash";
import StudentEditProfile from "./components/StudentEditProfile";
import Notification from "./components/notification/Notification";

const router = createBrowserRouter([
  {
    path: "/student",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/company/newjob",
    element: <AddJob />,
  },
  {
    path: "/job-details",
    element: <JobDetails />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/company",
    element: <CompanyDash />,
  },
  {
    path: "/student/edit",
    element: <StudentEditProfile />,
  },
  {
    path: "/company/notification",
    element: <Notification />,
  },
  {
    path:'/organization/:id',
    element: <JobDetails/>
  }
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
