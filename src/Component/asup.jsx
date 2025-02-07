import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Logo from "../../../public/image/Logo.png";
import AuthForm from "./AuthForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [articles, setArticles] = useState([]);

  // Charger les articles depuis le fichier JSON
  useEffect(() => {
    fetch("/data/articles.json")
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Erreur de chargement des articles:", error));
  }, []);

  // Ajouter un article au panier
  const addToCart = (article) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === article.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === article.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...article, quantity: 1 }];
      }
    });
  };

  // Supprimer un article du panier
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#dbc2ab] shadow-md z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Liens de navigation */}
          <ul className={`md:flex space-x-8 py-4 text-lg font-semibold transition-all duration-300 
            ${isOpen ? "absolute top-full left-0 w-full bg-white shadow-md p-5 space-y-4" : "hidden md:flex"}
            `}
          >
            <li className="lien transitionhover:text-[#d1c7c0] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:rounded-2xl " ><a href="#">Accueil</a></li>
            <li className="lien transitionhover:text-[#d1c7c0] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:rounded-2xl " ><a href="#">Boutique</a></li>
            <li className="lien transitionhover:text-[#d1c7c0] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:rounded-2xl " ><a href="#">Offres</a></li>
            <li className="lien transitionhover:text-[#d1c7c0] relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#78614f] after:transition-all after:duration-300 after:origin-center hover:after:left-0 hover:after:w-full hover:rounded-2xl " ><a  href="#">Contact</a></li>
          </ul>

          <div className="flex font-bold text-[#78614f]">
            <a href="#">
              <img className="w-32 rounded-3xl border transition-all duration-300" src={Logo} alt="Logo" />
            </a>
            <button
              className="mx-5 px-6 py-2 rounded-lg bg-[#78614f] text-white hover:bg-[#5e4935] transition-all"
              onClick={() => setIsAuthOpen(true)}
            >
              Se connecter
            </button>

            <button className="relative ml-5" onClick={() => setIsCartOpen(!isCartOpen)}>
              <ShoppingCart size={28} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isAuthOpen && <AuthForm closeForm={() => setIsAuthOpen(false)} />}

      {/* PANIER */}
      <div className={`fixed top-0 right-0 w-80 h-full bg-gray-800 text-white transition-transform duration-300 z-50
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 flex justify-between items-center bg-gray-900">
          <h2 className="text-lg font-bold">🛒 Panier</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-300 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <img src={item.image_url} alt={item.nom} className="w-12 h-12 rounded-md" />
                <div className="flex-1 ml-3">
                  <h3 className="text-sm font-semibold">{item.nom}</h3>
                  <p className="text-sm">${item.prix} x {item.quantity}</p>
                </div>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">Votre panier est vide.</p>
          )}
        </div>
        <div className="p-4">
          <button className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition">
            Passer la commande
          </button>
        </div>
      </div>

      {/* LISTE DES ARTICLES */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">🛍️ Nos Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="border p-4 rounded-lg shadow-lg">
              <img src={article.image_url} alt={article.nom} className="w-full h-40 object-cover rounded-md mb-3" />
              <h3 className="text-lg font-bold">{article.nom}</h3>
              <p className="text-gray-600 text-sm">{article.description}</p>
              <p className="text-lg font-semibold mt-2">${article.prix}</p>
              <button
                className="mt-4 px-4 py-2 bg-[#78614f] text-white rounded-lg hover:bg-[#5e4935] transition-all"
                onClick={() => addToCart(article)}
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
