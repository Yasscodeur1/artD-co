
import Navbar from "./Elements/NavBar";
import Image from "../../public/image/sarah-c-back.png";
import Image2 from "../../public/cadre-image-removebg-preview.png";

import "./header.css";

export default function Header({panier = [] }) {
  
  return (
    <div className="header w-full h-full">
      <Navbar openCart={() => setIsOpen(true)} panier={panier} />

      <div className="w-full mt-16 py-9 mr-10 flex justify-evenly items-center">
        <div className="w-96 shadow-2xl p-5">
          <h1 className="text-3xl text-[#493b2f] font-bold">
            Transformez Votre Espace, Élevez Votre Style
          </h1>
          <p className="py-10">
            Découvrez une sélection unique de décorations qui apportent
            caractère et élégance à chaque pièce de votre maison. Que vous soyez
            à la recherche d'objets modernes, de touches vintage ou d'éléments
            naturels, nous avons ce qu'il vous faut. Nos produits sont
            soigneusement choisis pour allier qualité et style. Transformez
            votre intérieur en un lieu qui vous ressemble. Laissez libre cours à
            votre créativité et redonnez vie à vos espaces avec notre
            collection.
          </p>
        </div>
        <img
          className="relative rounded-2xl h-90 w-105 shadow-inner p-6 bg-gray-200"
          src={Image}
          alt=""
        />
        <img className='absolute top-0 right-30 w-160 h-150' src={Image2} alt="" />
      </div>
    </div>
  );
}
