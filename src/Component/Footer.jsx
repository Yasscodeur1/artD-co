import Image from "../../public/image/Capture d’écran 2025-02-09 à 00.33.26.png";
import AuthForm from "./Elements/AuthForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Footer.css'

export default function Footer() {
  return (
    <div className="foot h-10 w-full">
      <div>
        {/* <div className="">
          <img className="" src={Image} alt="" value="Created "/>
          <p className="">© by Bastos and Yasscodeur - first project e-shop</p>
        </div> */}
        
        <Router>
          <Routes>
            <Route path="/" element={<home/>} />
            <Route path="/auth" element={<AuthForm />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
