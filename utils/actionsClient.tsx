"use client";
import { z } from "zod";
import { customAxiosWithJWT } from "./cutomAxiosWithJwt";
import { checkUserType, LoginResponse } from "./type";
import { loginSchema, registerSchema } from "./zodSchema";
import Cookies from "js-cookie";
import { toast } from "@/components/hooks/use-toast";
import axios from "axios";

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
    console.log(user);

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
