interface ProductImage {
  id: number;
  src: string;
}

interface attributes {
  id: number;
  name: string;
  options: string[];
  position: number;
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
  categories: categories[];
  images: ProductImage[];
  attributes: attributes[];
  related_ids: number[];
}

export interface categories {
  id: number;
  name: string;
  parent?: number;
}

export interface LoginResponse {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
  success: number | string;
  message: string;
}

export interface checkUserType {
  roles: string[];
  avatar_urls: string[];
  username: string;
}
