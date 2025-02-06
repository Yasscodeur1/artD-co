import Image from "../../public/image/industrial-style-track-lighting-with-vintage-metal-shade-transparent-background/0d3c9bf5-b5e7-42c9-9829-2412043f1d56.jpg";
import AuthForm from "./Elements/AuthForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div>
        <img className="h-16 w-full" src={Image} alt="" />
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
