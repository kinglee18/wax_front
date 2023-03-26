export interface Product {
  _id: string;
  name: string;
  mainImage: string;
  mainImageId: string;
  images: string[];
  imagesId: string[];
  description: string;
  category: string;
  seller: string;
  price: number;
  priceAfterDiscount: number;
  priceDiscount: number;
  colors: {
    _id: string;
    color: string;
  }[];
  sizes: {
    _id: string;
    size: string;
  }[];
  quantity: number;
  sold: number;
  isOutOfStock: boolean;
  ratingsAverage: number;
  ratingsQuantity: number;
  slug: string;
  id: string;
}
