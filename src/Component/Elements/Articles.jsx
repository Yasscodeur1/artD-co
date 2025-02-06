

export default function Articles({ image, title, description, prix, quantite, addToCart, categorie, marque, couleur, garantie }) {
  return (
    <div className="bg-[#947250] shadow-lg rounded-lg p-4 w-64">
      <img className="w-full h-80 object-cover rounded-t-lg " src={image} alt={title} />
      <div className="p-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-50">{description}</p>
        <p className="text-md font-semibold text-white mt-2">{prix} €</p>
        {/* <p className="text-sm text-gray-400">Stock : {quantite}</p> */}
        <p className="text-sm text-[#E6C28B] pt-3">Catégorie : {categorie}</p>
        {/* {marque && <p className="text-sm text-gray-400">Marque : {marque}</p>}
        {couleur && <p className="text-sm text-gray-400">Couleur : {couleur}</p>}
        {garantie && <p className="text-sm text-gray-400">Garantie : {garantie}</p>} */}
        <button
          className="mt-4 bg-[#78614f] text-white py-2 px-4 rounded-lg hover:bg-[#5e4935] transition-all w-full"
          onClick={addToCart}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
