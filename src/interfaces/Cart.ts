export interface Cart {
  items: CartItem[];
  total: number;
}

export interface CartItem {
  productId: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  quantity: number;
}
