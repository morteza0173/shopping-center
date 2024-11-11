import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, {
    message: "نام کاربری باید بیشتر از 2 حرف باشد",
  }),
  password: z.string().min(5, {
    message: "پسورد باید بیشتر از 4 حرف باشد",
  }),
});

export const registerSchema = z.object({
  username: z.string().min(3, {
    message: "نام کاربری باید بیشتر از 2 حرف باشد",
  }),
  email: z.string().email("ایمیل معتبر وارد کنید"),
  password: z.string().min(6, {
    message: "پسورد باید بیشتر از 5 حرف باشد",
  }),
});
