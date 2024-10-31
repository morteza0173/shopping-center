interface ProductImage {
  id: number;
  src: string;
}

export interface featuredProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  short_description: string;
  images: ProductImage[];
}
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  short_description: string;
  images: ProductImage[];
}
