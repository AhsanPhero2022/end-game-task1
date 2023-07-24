import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/share/Home";
import Footer from "./components/pages/share/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

      </div>
    </>
  );
}

export default App;
