import React, { useState } from "react";
import Data from "../../data.json"; // Importation du fichier JSON
import Articles from "./Elements/Articles"; // Importation du composant Articles
import Panier from "./Elements/Panier";
import Navbar from "./Elements/NavBar"; // Importation de la Navbar

export default function Mains() {
  const [panier, setPanier] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [solde, setSolde] = useState(false);

  const addToCart = (article) => {
    setPanier((prev) => {
      const exist = prev.find((item) => item.id === article.id);
      if (exist) {
        return prev.map((item) =>
          item.id === article.id ? { ...item, quantite: item.quantite + 1 } : item
        );
      }
      return [...prev, { ...article, quantite: 1 }];
    });
    setIsOpen(true);
  };

  
  // Fonction pour ouvrir le panier
  const openCart = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar openCart={openCart} panier={panier}/>
    <div className="mains flex flex-wrap gap-6 justify-center p-6 my-10 mx-20">
      {Data.articles.map((item) => (
        <Articles
          key={item.id}
          image={item.image_url}
          title={item.nom}
          description={item.description}
          prix={item.prix}
          quantite={item.quantite}
          categorie={item.categorie}
          marque={item.marque}
          couleur={item.couleur}
          garantie={item.garantie}
          addToCart={() => addToCart(item)}
        />
      ))}
      <div className="relative">
      <button
        className="fixed top-4 right-4 bg-[#78614f] text-white p-2 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        🛒 {panier.length}
      </button>

      

      {/* Panier (Sidebar) */}
      <Panier panier={panier} setPanier={setPanier} isOpen={isOpen} setIsOpen={setIsOpen} solde={solde} setSolde={setSolde}/> 

    </div>
    </div>
    </div>
  );
}
