import React, { useState } from "react";
import Data from "../../data.json"; // Importation du fichier JSON
import Articles from "./Elements/Articles"; // Importation du composant Articles
import Panier from "./Elements/Panier";
import Navbar from "./Elements/NavBar"; // Importation de la Navbar

export default function Mains() {
  const [panier, setPanier] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [solde, setSolde] = useState(1500);
  const [articles, setArticles] = useState(Data.articles);

  const addToCart = (article) => {
    setPanier((prev) => {
      const exist = prev.find((item) => item.id === article.id);

      const stockArticle = articles.find((art) => art.id === article.id);
      if (!stockArticle || stockArticle.quantite <= 0) {
        alert("Stock épuisé !");
        return prev;
      }

      if (exist) {
        if (exist.quantite < article.quantite) {
          return prev.map((item) =>
            item.id === article.id
              ? { ...item, quantite: item.quantite + 1 }
              : item
          );
        } else {
          alert("Stock insuffisant !");
          return prev;
        }
      }

      return [...prev, { ...article, quantite: 1 }];
    });

    // ✅ Mise à jour du stock global
    setArticles((prevArticles) =>
      prevArticles.map((art) =>
        art.id === article.id ? { ...art, quantite: art.quantite - 1 } : art
      )
    );
  };

  // Fonction pour ouvrir le panier
  const openCart = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar openCart={openCart} panier={panier} />
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
          <Panier
            panier={panier}
            setPanier={setPanier}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            solde={solde}
            setSolde={setSolde}
          />
        </div>
      </div>
    </div>
  );
}
