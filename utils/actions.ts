import customAxios from "./customAxios";
import { featuredProduct, Product } from "@/utils/type";

//fetch featured products and used in ProductsCurousel.tsx

export const fetchFeaturedProducts = async (
  perpage?: number
): Promise<featuredProduct[] | undefined> => {
  try {
    const products = await customAxios.get("wc/v3/products", {
      params: {
        featured: true,
        order: "desc",
        per_page: perpage || 16,
      },
    });
    return products.data as featuredProduct[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

//fetch all products

export const fetchAllProducts = async (
  perpage?: number
): Promise<Product[] | undefined> => {
  try {
    const products = await customAxios.get("wc/v3/products", {
      params: {
        order: "desc",
        per_page: perpage || 16,
      },
    });
    return products.data as Product[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
