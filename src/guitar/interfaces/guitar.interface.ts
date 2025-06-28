export interface IGuitar {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity?: number; // Optional property to track quantity in the cart
}