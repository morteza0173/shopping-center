import { NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
  // گرفتن توکن از کوکی‌ها
  const token = req.cookies.get("token")?.value;

  // اگر توکن موجود نیست، ریدایرکت به صفحه لاگین
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }


  // اگر توکن معتبر بود، اجازه ادامه به صفحه داشبورد داده می‌شود
  return NextResponse.next();
}

// محدود کردن اعمال Middleware به مسیرهای /dashboard و زیرمسیرهای آن
export const config = {
  matcher: ["/dashboard/:path*"], // اعمال Middleware فقط برای مسیر /dashboard و هر زیرمسیر آن
};
