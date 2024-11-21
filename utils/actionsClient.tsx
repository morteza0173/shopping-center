"use client";
import { number, z } from "zod";
import { customAxiosWithJWT } from "./cutomAxiosWithJwt";
import {
  addWishList,
  checkUserType,
  checkWishlist,
  fetchWishList,
  LoginResponse,
} from "./type";
import { loginSchema, registerSchema } from "./zodSchema";
import Cookies from "js-cookie";
import { toast } from "@/components/hooks/use-toast";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const loginAction = async (
  data: z.infer<typeof loginSchema>
): Promise<LoginResponse | undefined> => {
  try {
    const user = await customAxiosWithJWT.post<LoginResponse>(
      "jwt-auth/v1/token",
      data
    );
    if (user.data.token) {
      Cookies.set("token", user.data.token, {
        path: "/",
      });
      localStorage.setItem("token", user.data.token);
      window.location.href = "/";
    }
    return user.data;
  } catch (error) {
    console.log(error);
    toast({
      description: "خطایی رخ داد",
    });
  }
};

export const checkUser = async () => {
  try {
    const user = await customAxiosWithJWT.post<checkUserType>("wp/v2/users/me");

    return user.data;
  } catch (error) {
    console.log(error);
    Cookies.remove("token");
  }
};

export const registerAction = async (data: z.infer<typeof registerSchema>) => {
  try {
    const user = await axios.post(
      "https://mobiroid.ir/wp-json/custom/v1/register",
      data
    );
    if (user) {
      toast({
        title: "ثبت نام با موفقیت انجام شد!",
        description: "حالا میتوانید وارد شوید",
      });
    }

    return user.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      toast({
        description: error.response.data.message,
      });
    }
  }
};

export const fetchFavoriteId = async ({ productId }: { productId: number }) => {
  try {
    const response = await customAxiosWithJWT.post<checkWishlist>(
      "custom/v1/wishlist/check",
      {
        product_id: productId,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const toggleFavoriteAction = async ({
  productId,
  isFavorite,
}: {
  productId: string;
  isFavorite: boolean;
}) => {
  try {
    if (!isFavorite) {
      const response = await customAxiosWithJWT.post<addWishList>(
        "custom/v1/wishlist/add",
        {
          product_id: productId,
        }
      );
      toast({ title: response.data.message });
      return response.status;
    } else {
      const response = await customAxiosWithJWT.post<addWishList>(
        "custom/v1/wishlist/remove",
        {
          product_id: productId,
        }
      );
      toast({ title: response.data.message });
      return response.status;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserFavorites = async () => {
  try {
    const response = await customAxiosWithJWT.get<fetchWishList>(
      "custom/v1/wishlist"
    );
    return response.data;
  } catch (error) {}
};
