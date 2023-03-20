import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import GithubChart from "./components/GithubChart/GithubChart";
import Team from "./components/Team/Team";
import About from "./components/About/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // Setting home page as default
  { path: "*", element:<Home/>},
  { path: '/team', element: <Team/> },
  { path: '/about', element: <About/> }
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <GithubChart />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
