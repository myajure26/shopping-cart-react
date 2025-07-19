import type { FC } from 'react';
import type { IGuitar } from '../interfaces/guitar.interface';

interface Props {
  guitar: IGuitar;
  removeFromCart: (id: number) => void;
}

const Cart: FC<Props> = ( { guitar, removeFromCart } ) => {
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
          >
            -
          </button>
          {guitar.quantity}
          <button
            type="button"
            className="btn btn-dark"
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