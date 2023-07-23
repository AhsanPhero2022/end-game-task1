import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/share/Home";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        

      </div>
    </>
  );
}

export default App;
