import "./App.css";
import NavScrollExample from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FillSection from "./components/fillSection/fillSec";
import Form from "./components/CvForm/CvForm";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter, Route, Routes , Router} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Chart from "./pages/Chart";
import Templates from "./pages/Templates";

function App() {
  
  
  return (
  
      <Routes>
         <Route exact path="/" element={<Login/>} />
         <Route path="/signup-page" element ={<Signup/>} />
         <Route path="/forgot-password" element ={<ForgotPassword/>} />
         <Route path="/login-page" element ={<Login/>} />
         <Route path="/back-to-login-page" element ={<Login/>} />
         <Route path="/dashboard" element ={<Chart/>} />
         <Route path="/create" element ={<Dashboard/>} />
         <Route path="/create" element ={<Dashboard/>} />
         <Route path="/editor" element ={<Dashboard/>} />
         <Route path="/template" element ={<Templates/>} />
      </Routes>

  );
}

export default App;
