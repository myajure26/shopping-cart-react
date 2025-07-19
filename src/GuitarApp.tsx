import { useState } from 'react';
import { db } from './data/db';
import Header from './guitar/components/Header';
import Guitar from './guitar/components/Guitar';
import type { IGuitar } from './guitar/interfaces/guitar.interface';


const GuitarApp = () => {

  const [data, _] = useState(db);  
  const [cart, setCart] = useState<IGuitar[]>([]);

  const addToCart = (id: number) => {
    const guitar = data.find(item => item.id === id);

    if (!guitar) return;

    const itemExists = cart.some(item => item.id === id);

    if (!itemExists) {
      setCart((prevCart) => [...prevCart, { ...guitar, quantity: 1 }]);
      return;
    }

    const updatedCart = cart.map(item => {
      if (item.id === id) {
        item.quantity! += 1; 
      }
      return item;
    });
    setCart(updatedCart);
    return;
  }

  const removeFromCart = (id: number) => {

    setCart((prevCart) => prevCart.filter(item => item.id !== id));

  }

  return (
    <>
      <Header cart={cart} removeFromCart={removeFromCart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarShop - Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
};

export default GuitarApp;

