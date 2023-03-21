import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Branches from "./components/Branches/Branches";
import GithubChart from "./components/GithubChart/GithubChart";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/branches", element: <Branches />},
  // Setting home page as default
  { path: "*", element:<Home/>},
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
