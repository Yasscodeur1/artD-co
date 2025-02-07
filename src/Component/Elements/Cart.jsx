import { useState } from 'react';

export default function Cart({ cartItems, setCartItems, totalPrice, closeCart }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handleReturnItem = (index) => {
    const item = cartItems[index];
    item.stock += 1;
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        className="absolute top-4 left-4 text-xl"
        onClick={() => setIsOpen(false)}
      >
        X
      </button>
      <h2 className="text-2xl font-bold p-4">Panier</h2>
      <div className="px-4 py-2 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <span className="font-bold">{item.title}</span>
                <span>{item.prix} €</span>
                <span>Quantité: {item.quantity}</span>
                <span className={item.stock === 0 ? 'text-red-600' : ''}>
                  {item.stock === 0 ? 'En rupture de stock' : `Stock: ${item.stock}`}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <button
                  className="bg-[#78614f] text-white py-1 px-2 rounded-lg mb-2"
                  onClick={() => handleRemoveItem(index)}
                >
                  Retirer
                </button>
                {item.stock === 0 ? (
                  <button
                    className="bg-[#E6C28B] text-white py-1 px-2 rounded-lg"
                    onClick={() => handleReturnItem(index)}
                  >
                    Retourner au magasin
                  </button>
                ) : null}
              </div>
            </div>
          ))
        )}
        <div className="mt-4">
          <h3 className="font-semibold">Total: {totalPrice} €</h3>
        </div>
      </div>
    </div>
  );
}
