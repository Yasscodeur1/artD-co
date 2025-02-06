import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../../../public/image/Logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#d1d1d1] shadow-md z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Menu Burger (Mobile) */}
            <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
            </div>

            {/* Liens de navigation */}
            <ul className={`md:flex space-x-8 py-4 text-lg font-semibold transition-all duration-300 
            ${isOpen ? "absolute top-full left-0 w-full bg-white shadow-md p-5 space-y-4" : "hidden md:flex"}
            `}>
            <li>
                <a href="#" className="transitionhover:text-[#d1c7c0] py-2 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full">Accueil</a>
            </li>
            <li>
                <a href="#" className="transitionhover:text-[#d1c7c0] py-2 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full  hover:bg-cyan-950 hover:text-white hover:rounded-t-full hover:px-5 ">Boutique</a>
            </li>
            <li>
                <a href="#" className="transitionhover:text-[#d1c7c0] py-2 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full">Offres</a>
            </li>
            <li>
                <a href="#" className="transitionhover:text-[#d1c7c0] py-2 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:bg-cyan-950 hover:text-white hover:rounded-t-full hover:px-5">Contact</a>
            </li>
            </ul>

            {/* Logo (à droite) */}
            <div className="text-2xl font-bold text-[#78614f]">
            <a href="#"><img className="w-32 md:w-32 md:m-3 sm:w-16 sm:m-3 xs:w-20 rounded-3xl border transition-all duration-300" src={Logo} alt="" /></a>
            </div>
        </div>
    </nav>
  );
}
