

import { Trash2 } from "lucide-react"; // Icône de la poubelle
import Data from "../../../data.json"; // Importer les données des articles
import { useState } from "react";

export default function Panier({ panier = [], setPanier, isOpen, setIsOpen, solde, setSolde }) {

  const [articles, setArticles] = useState(Data.articles);


  // Fonction pour augmenter la quantité
  const incrementer = (id) => {
    // Trouver l'article dans le stock global
    const stockArticle = articles.find((art) => art.id === id);
    if (!stockArticle || stockArticle.quantite <= 0) {
      alert("Stock insuffisant !");
      return;
    }
  
    // Mise à jour du stock global en premier
    setArticles((prevArticles) =>
      prevArticles.map((art) =>
        art.id === id ? { ...art, quantite: art.quantite - 1 } : art
      )
    );
  
    // Ensuite, mise à jour du panier
    setPanier((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantite: item.quantite + 1 } : item
      )
    );
  };
  
  

  // Fonction pour diminuer la quantité
  const decrementer = (id) => {
    setPanier((prev) =>
      prev.map((item) =>
        item.id === id && item.quantite > 1
          ? { ...item, quantite: item.quantite - 1 }
          : item
      )
    );
  };

  // Calcul du total des articles
  const totalArticles = panier.reduce((total, item) => total + item.quantite, 0);

  // Calcul du total à payer
  const totalPrix = panier.reduce(
    (total, item) => total + item.prix * item.quantite,
    0
  );

  // Fonction pour supprimer un article
  const supprimer = (id) => {
    setPanier((prev) => prev.filter((item) => item.id !== id));
  };

  // Fonction pour effectuer un paiement
  const payer = () => {
    if (solde < totalPrix) {
      alert("Solde insuffisant !");
      return;
    }

    setSolde((prevSolde) => prevSolde - totalPrix); // Met à jour le solde

    setPanier((prev) => {
      prev.forEach((item) => {
        const articleIndex = Data.articles.findIndex((art) => art.id === item.id);
        if (articleIndex !== -1) {
          Data.articles[articleIndex].quantite -= item.quantite;
        }
      });

      alert(`Paiement réussi ! Nouveau solde : ${solde - totalPrix} €`);
      return []; // Vider le panier après achat
    });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full pb-16 w-80 bg-[#5e4935] text-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header du panier */}
      <div className="mt-14 p-4 border-b border-gray-300 flex justify-between items-center">
        <h2 className="text-lg font-bold">🛒 Panier ({totalArticles})</h2>
        <button
          className="text-lg font-bold text-white"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
      </div>

      {/* Liste des articles */}
      <div className="p-4 space-y-4 overflow-y-auto h-[70%]">
        {panier.length === 0 ? (
          <p className="text-center text-gray-300">Votre panier est vide.</p>
        ) : (
          panier.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-[#78614f] p-2 rounded-lg"
            >
              <img src={item.image_url} alt={item.nom} className="w-12 h-12 rounded-lg" />
              <div className="flex-1 px-2">
                <h3 className="text-sm font-semibold">{item.nom}</h3>
                <p className="text-xs text-gray-200">{item.prix} €</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-[#E6C28B] text-black px-2 rounded-sm"
                  onClick={() => decrementer(item.id)}
                >
                  ➖
                </button>
                <span className="text-lg">{item.quantite}</span>
                <button
                  className="bg-[#E6C28B] text-black px-2 rounded-sm"
                  onClick={() => incrementer(item.id)}
                >
                  ➕
                </button>
                <button onClick={() => supprimer(item.id)}>
                  <Trash2 className="text-red-400 w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Totaux */}
      <div className="p-4 border-t border-gray-300">
        <div className="flex justify-between items-center mb-2">
          <span>Total articles:</span>
          <span>{totalArticles}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Solde disponible:</span>
          {/* <span>{solde.toFixed(2)} €</span> */}
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Total à payer:</span>
          <span>{totalPrix.toFixed(2)} €</span>
        </div>

        {/* Bouton de paiement */}
        <button
          onClick={payer}
          className="w-full py-2 bg-[#E6C28B] text-black rounded-lg hover:bg-[#D4A92B] transition-all"
          disabled={panier.length === 0}
        >
          Payer maintenant
        </button>
      </div>
    </div>
  );
}
