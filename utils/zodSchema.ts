import { z } from "zod";

function countWords(text: string): number {
  const trimmedText = text.trim();
  const words = trimmedText.split(/[\s‌،؛.؟!?،]+/);
  const validWords = words.filter((word) => word.length > 0);
  return validWords.length;
}

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

export const addProductSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "نام محصول باید حداقل 5 حرف باشد",
    })
    .max(30, {
      message: "نام محصول حداکثر 30 حرف میتواند باشد",
    }),

  description: z.string().refine(
    (val) => {
      const wordCount = countWords(val);
      return wordCount >= 60;
    },
    {
      message: "توضیحات باید حداقل شامل 60 کلمه باشد ",
    }
  ),
  regular_price: z.string().min(4, {
    message: "حداقل قیمت محصول باید هزارتومان باشد",
  }),
  short_description: z.string().refine(
    (val) => {
      const wordCount = countWords(val);
      return wordCount >= 10;
    },
    {
      message: "توضیحات باید حداقل شامل 10 کلمه باشد ",
    }
  ),
  attributes: z
    .array(
      z.object({
        name: z.string().min(1, "نام ویژگی الزامی است"),
        options: z.array(z.string().min(1, "توضیحات ویژگی الزامی است")),
      })
    )
    .optional(), // ویژگی اختیاری
});
