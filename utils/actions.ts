import customAxios from "./customAxios";
import {
  categories,
  checkUserType,
  featuredProduct,
  LoginResponse,
  Product,
} from "@/utils/type";
import { loginSchema } from "./zodSchema";
import { z } from "zod";
import { toast } from "@/components/hooks/use-toast";
import Cookies from "js-cookie";

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
  perpage?: number,
  search?: string
): Promise<Product[] | undefined> => {
  const params: {
    search?: string;
    per_page?: number;
  } = {};
  if (search) {
    params.search = search;
  }
  if (perpage) {
    params.per_page = perpage;
  }


  try {
    const products = await customAxios.get("wc/v3/products", {
      params: params,
    });
    return products.data as Product[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// export const fetchSingleProduct = async (
//   id: string
// ): Promise<Product | undefined> => {
//   try {
//     const product = await customAxios.get(`wc/v3/products/${id}`);
//     return product.data as Product;
//   } catch (error) {
//     console.log(error);
//     return undefined;
//   }
// };

export const fetchSingleProduct = async (
  id: string
): Promise<{ product: Product; relatedProducts: Product[] } | undefined> => {
  try {
    const productResponse = await customAxios.get<Product>(
      `wc/v3/products/${id}`
    );
    const product = productResponse.data;
    const relatedIds = product.related_ids;

    if (relatedIds.length > 0) {
      const relatedProductsResponse = await customAxios.get<Product[]>(
        `wc/v3/products`,
        {
          params: {
            include: relatedIds.join(","),
          },
        }
      );
      const relatedProducts = relatedProductsResponse.data;

      return {
        product,
        relatedProducts,
      };
    } else {
      // در صورتی که محصول مرتبطی وجود نداشته باشد
      return {
        product,
        relatedProducts: [],
      };
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const fetchAllCategories = async (): Promise<
  categories[] | undefined
> => {
  try {
    const categories = await customAxios.get("wc/v3/products/categories");
    return categories.data as categories[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};