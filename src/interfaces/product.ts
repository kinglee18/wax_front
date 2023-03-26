export interface Product {
  _id: string;
  name: string;
  images: string[];
  colors: {
    _id: string;
    color: string;
  }[];
  sizes: {
    _id: string;
    size: string;
  }[];
  id: string;
}
