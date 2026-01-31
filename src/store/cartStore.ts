import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  storage?: string;
};


type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
    items: [
    {
        id: "1",
        name: "Ultra-Slim Laptop",
        price: 1250,
        image: "/images/products/ultra-slim-laptop-product.png",
        quantity: 1,
        color: "Space Gray",
        storage: "256GB",
    },
    {
        id: "2",
        name: "Wireless Headphones",
        price: 199.99,
        image: "/images/products/wireless-headphones-product.png",
        quantity: 1,
        color: "Black",
    },
    ],


  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  increment: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decrement: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  totalItems: () =>
    get().items.reduce((sum, item) => sum + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
}));
