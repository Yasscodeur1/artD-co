import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Logo from "../../../public/image/Logo.png";
import AuthForm from "./AuthForm"; // Import du formulaire

export default function Navbar({ openCart, panier }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false); // État pour le formulaire

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#dbc2ab] shadow-md z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Menu Burger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Liens de navigation */}
          <ul
            className={`md:flex space-x-8 py-4 text-lg font-semibold transition-all duration-300 
            ${
              isOpen
                ? "absolute top-full left-0 w-full bg-white shadow-md p-5 space-y-4"
                : "hidden md:flex"
            }
            `}
          >
            <li className="lien transitionhover:text-[#d1c7c0] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:rounded-2xl ">
              <a href="#">Accueil</a>
            </li>
            <li className="lien transitionhover:text-[#d1c7c0] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:rounded-2xl ">
              <a href="#">Boutique</a>
            </li>
            <li className="lien transitionhover:text-[#d1c7c0] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:rounded-2xl ">
              <a href="#">Offres</a>
            </li>
            <li className="lien transitionhover:text-[#d1c7c0] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:rounded-2xl ">
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Logo & Connexion */}
          <div className="flex font-bold text-[#78614f]">
            <a href="#">
              <img
                className="w-32 rounded-3xl border transition-all duration-300"
                src={Logo}
                alt=""
              />
            </a>
            <button
              className="mx-5 px-6 py-2 rounded-lg bg-[#78614f] text-white hover:bg-[#5e4935] transition-all"
              onClick={() => setIsAuthOpen(true)}
            >
              Se connecter
            </button>

            {/* Bouton Panier avec compteur */}
            <button className="relative ml-5" onClick={openCart}>
              <ShoppingCart size={28} />
              {/* Compteur des articles dans le panier */}
              {panier.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {panier.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Formulaire d'authentification */}
      {isAuthOpen && <AuthForm closeForm={() => setIsAuthOpen(false)} />}
    </>
  );
}
