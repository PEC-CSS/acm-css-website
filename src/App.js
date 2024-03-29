import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Events from "./pages/Events";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/events", element: <Events /> },
  // Setting home page as default
  { path: "*", element:<Home/>},
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
