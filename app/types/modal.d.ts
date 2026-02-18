export type Product = {
  id: number | string;
  title: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
  rating?: {
    rate: number;
    count: number;
  };
};