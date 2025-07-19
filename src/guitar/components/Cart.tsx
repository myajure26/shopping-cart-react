import type { FC } from 'react';
import type { IGuitar } from '../interfaces/guitar.interface';

interface Props {
  guitar: IGuitar;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const Cart: FC<Props> = ( { guitar, removeFromCart, increaseQuantity, decreaseQuantity } ) => {
  return (
    <>
      <tr>
        <td>
          <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
        </td>
        <td>{guitar.name}</td>
        <td className="fw-bold">
          ${guitar.price}
        </td>
        <td className="flex align-items-start gap-4">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => decreaseQuantity(guitar.id)}
          >
            -
          </button>
          {guitar.quantity}
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => increaseQuantity(guitar.id)}
          >
            +
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => removeFromCart(guitar.id)}
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
};

export default Cart;