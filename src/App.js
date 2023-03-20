import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import GithubChart from "./components/GithubChart/GithubChart";
import Calendar from "./components/Calendar/Calendar";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // Setting home page as default
  { path: "*", element:<Home/>},
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <GithubChart />
      <Calendar />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
