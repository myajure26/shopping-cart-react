import { useMemo, type FC } from "react";
import type { IGuitar } from "../interfaces/guitar.interface";
import Cart from "./Cart";

interface Props {
  cart: IGuitar[];
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart?: () => void; // Optional prop for clearing the cart
}

const Header: FC<Props> = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }) => {
  const isEmpty = useMemo( () => cart.length === 0, [cart.length]);
  const total = useMemo(() => cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0), [cart]);

  return (
    <>
      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src="./public/img/logo.svg"
                  alt="imagen logo"
                />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="cart">
                <img
                  className="img-fluid"
                  src="./public/img/cart.png"
                  alt="imagen carrito"
                />

                <div id="cart" className="bg-white p-3">
                  {isEmpty ? (
                    <p className="text-center">El carrito esta vacio</p>
                  ) : (
                    <>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item) => (
                            <Cart key={item.id} guitar={item} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
                          ))}
                        </tbody>
                      </table>

                      <p className="text-end">
                        Total pagar: <span className="fw-bold">${total}</span>
                      </p>
                      <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>
                        Vaciar Carrito
                      </button>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
