import Navbar from "./Elements/NavBar";
import Image from "../../public/image/sarah-c-back.png";
import Image2 from "../../public/headerFond.png";

import "./header.css";

export default function Header({ panier = [] }) {
  return (
    <div className="header w-full h-full">
      <Navbar openCart={() => setIsOpen(true)} panier={panier} />

      <div className="w-full lg:h-full mt-16 py-9 mr-10 flex justify-evenly items-center flex-wrap
            md:flex md:h-300 
            sm:flex sm:h-300">
        {/*md:flex space-x-8 py-4 text-lg font-semibold transition-all duration-300*/}
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
          className="rounded-full h-90 w-105 shadow-2xl shadow-[#f5d9b0] p-6  "
          src={Image}
          alt=""
        />
        <img
          className="absolute lg:bottom-10 lg:left-83 xl:left-158 w-210 h-130 hidden lg:block"
          src={Image2}
          alt="image"
        />
      </div>
    </div>
  );
}
