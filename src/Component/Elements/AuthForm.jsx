import { X } from "lucide-react";
import './AuthForm'

export default function AuthForm({ closeForm }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex">
      {/* Conteneur de la fenêtre */}
      <div className="bg-white w-80 md:w-96 p-6 shadow-lg transform transition-transform translate-x-0 animate-slide-in">
        {/* Bouton de fermeture */}
        <button className="absolute top-4 right-4 text-gray-600" onClick={closeForm}>
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Se connecter</h2>

        {/* Formulaire */}
        <form className="flex flex-col space-y-4">
          <input type="email" placeholder="Email" className="p-3 border rounded-lg" />
          <input type="password" placeholder="Mot de passe" className="p-3 border rounded-lg" />
          <button className="bg-[#78614f] text-white py-2 rounded-lg hover:bg-[#5e4935] transition-all">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}
